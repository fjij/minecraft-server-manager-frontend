import { Server } from '../api/server';
import React, { useEffect, useState } from 'react';
import api from '../api';
import ServerListItem from './ServerListItem';

export default function ServerList() {
  const [servers, setServers] = useState<Server[] | null>(null);
  useEffect(() => {
    api.server.getServers().then(servers => setServers(servers));
  }, [])

  return (
    <div className='ServerList'>
      <h1>Servers</h1>
      {servers && servers.map(s => <ServerListItem server={s} key={s.name}/>)}
    </div>
  );
}
