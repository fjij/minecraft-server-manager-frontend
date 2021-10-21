import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';
import { Server } from '../api/server';
import ServerListItem from './ServerListItem';

export default function ServerList() {
  const [servers, setServers] = useState<Server[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    api.server.getServers().then(servers => setServers(servers));
  }, [])

  return (
    <div className='ServerList Page'>
      <h1>Servers</h1>
      <ul>
        {servers && servers.map(s => <ServerListItem server={s} key={s.name}/>)}
      </ul>
      <button onClick={() => {
        history.push('/create-server');
      }}>New</button>
    </div>
  );
}
