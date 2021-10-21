import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

export default function CreatePresetView() {
  const [name, setName] = useState<string>('');

  const history = useHistory();

  return (
    <div className='CreatePresetView Page'>
      <h1>New Preset</h1>
      <form onSubmit={async e => {
        e.preventDefault();
        if (!name) {
          return;
        }
        try {
          await api.preset.putPreset({ name });
        } catch (e) {
          console.dir(e);
        }
        
        history.push('/preset/' + name);
      }}>
        <label>Name: </label>
        <br />
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='my-preset'
        />
        <br />
        <input type='submit' value='Create'/>
      </form>
    </div>
  );
}
