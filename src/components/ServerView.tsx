import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Server, ServerEnv } from '../api/server';
import api from '../api';
import AreYouSureButton from './AreYouSureButton';

interface ServerParamTypes {
  name: string;
}

export default function ServerView() {
  const [server, setServer] = useState<Server | null>(null);
  const [env, setEnv] = useState<ServerEnv | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isInputDisabled, setInputDisabled] = useState<boolean>(false);
  const { name } = useParams<ServerParamTypes>();

  const history = useHistory();

  useEffect(() => {
    api.server.getServer(name).then(async server => {
      const env = await api.server.getServerEnv(server);
      const status = await api.server.getServerStatus(server);
      setServer(server)
      setEnv(env)
      setStatus(status)
    });
  }, [])

  return (
    <div className='ServerView'>
      { server && env && status && <>
        <h1>Server: { name }</h1>
        <ul>
          <li>Port: { server.port }</li>
          <li>Created: { server.created }</li>
          <li>Volume: { server.volume }</li>
        </ul>
        <h2>Environment</h2>
        <div className='ServerEnv'>
          <ul>
            { Object.keys(env).map(key => <li key={key}>
              {key}: {env[key]}
            </li>) }
          </ul>
        </div>
        <h2>Container Status</h2>
        <div className='ServerStatus'>
          <ul>
            <li> Status: {status} </li>
          </ul>
          {
            status === 'none' ?
              <button disabled={isInputDisabled} onClick={async () => {
                setInputDisabled(true);
                await api.server.serverOn(server);
                setStatus(await api.server.getServerStatus(server));
                setInputDisabled(false);
              }}>Turn on</button> :
              <button disabled={isInputDisabled} onClick={async () => {
                setInputDisabled(true);
                await api.server.serverOff(server);
                setStatus(await api.server.getServerStatus(server));
                setInputDisabled(false);
              }}>Turn off</button>
          }
        </div>
        <AreYouSureButton disabled={isInputDisabled} onClick={async () => {
          setInputDisabled(true);
          await api.server.backupServer(server)
          history.push('/backups');
        }}>Backup</AreYouSureButton>
        <AreYouSureButton disabled={isInputDisabled} onClick={async () => {
          setInputDisabled(true);
          await api.server.deleteServer(server)
          history.push('/servers');
        }}>Delete</AreYouSureButton>
      </> }
    </div>
  );
}
