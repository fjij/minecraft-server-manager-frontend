import React from 'react';
import { Server } from '../api/server';
import { Link } from 'react-router-dom';

interface ServerListItemProps {
  server: Server;
}

export default function ServerListItem({server}: ServerListItemProps) {
  return (
    <div className='ServerListItem'>
      <Link to={ '/server/' + server.name }>
        {server.name}
      </Link>
    </div>
  );
};
