import { Backup } from '../api/backup';
import React, { useEffect, useState } from 'react';
import api from '../api';
import BackupListItem from './BackupListItem';

export default function ServerList() {
  const [backups, setBackups] = useState<Backup[] | null>(null);
  useEffect(() => {
    api.backup.getBackups().then(backups => setBackups(backups));
  }, [])

  return (
    <div className='BackupList'>
      <h1>Backups</h1>
      {backups && backups.map(b => <BackupListItem backup={b} key={b.name}/>)}
    </div>
  );
}
