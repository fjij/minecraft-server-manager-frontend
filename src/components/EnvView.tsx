import React, { useState, useEffect } from 'react';
import { ServerEnv } from '../api/server';
interface EnvViewProps {
  env: ServerEnv;
  setEnv: (env: ServerEnv) => void;
}
export default function EnvView({ env, setEnv }: EnvViewProps) {
  const [isEditable, setEditable] = useState(false);
  const [localEnv, setLocalEnv] = useState(env);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  useEffect(() => {
    setLocalEnv(env);
    setEditable(false);
    setNewKey('');
    setNewValue('');
  }, [env]);

  return (
    <div className='ServerEnv'>
      <h2>Environment</h2>
      <form onSubmit={(e) => {
        if (newKey !== '' && newValue !== '') {
          const newEnv = { ...localEnv };
          newEnv[newKey] = newValue;
          setLocalEnv(newEnv);
          setNewKey('');
          setNewValue('');
        }
        e.preventDefault();
      }}>
        <table>
          <tbody>
            {
              Object.keys(localEnv).length === 0 && !isEditable &&
              <tr className='placeholder'>
                <td>Nothing yet...</td>
              </tr>
            }
            {
              Object.keys(localEnv).map(key => <tr key={key}>
                <td>{key}</td>
                <td>=</td>
                <td>{localEnv[key]}</td>
                { isEditable &&
                  <td><button className='alert' onClick={() => {
                    const newEnv = { ...localEnv };
                    delete newEnv[key];
                    setLocalEnv(newEnv);
                  }}>Destroy</button></td>
                }
              </tr>) 
            }
          </tbody>
          { isEditable &&
            <tfoot>
              <tr>
                <td>
                  <input 
                    type='text' 
                    placeholder='Key' 
                    value={newKey} 
                    onChange={e => setNewKey(e.target.value)}
                  />
                </td>
                <td>=</td>
                <td>
                  <input 
                    type='text' 
                    placeholder='Value' 
                    value={newValue} 
                    onChange={e => setNewValue(e.target.value)}
                  />
                </td>
                <td><input type='submit' className='primary' value='Create'/></td>
              </tr>
            </tfoot>
          }
        </table>
      </form>
      <br />
      { !isEditable &&
        <button onClick={() => setEditable(true)}>Edit</button>
      }
      { isEditable && <>
        <button onClick={() => {
          setEnv(localEnv);
          setEditable(false);
          setNewKey('');
          setNewValue('');
        }}>Save</button>
        <button onClick={() => {
          setLocalEnv(env);
          setEditable(false);
          setNewKey('');
          setNewValue('');
        }}>Cancel</button>
      </> }
    </div>
  );
}
