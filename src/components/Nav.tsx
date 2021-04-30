import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/"><b>Minecraft Server Manager</b></Link>
      <Link to="/servers">Servers</Link>
      <Link to="/backups">Backups</Link>
      <Link to="/create-server">Create Server</Link>
    </nav>
  );
}
