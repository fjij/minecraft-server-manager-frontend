import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <Link className="NavLink" to="/"><b>Minecraft Server Manager</b></Link>
      <Link className="NavLink" to="/servers">Servers</Link>
      <Link className="NavLink" to="/backups">Backups</Link>
      <Link className="NavLink" to="/create-server">Create Server</Link>
    </div>
  );
}
