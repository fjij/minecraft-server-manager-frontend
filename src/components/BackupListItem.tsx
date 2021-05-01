import React from 'react';
import { Backup } from '../api/backup';

interface BackupListItemProps {
  backup: Backup;
}

export default function BackupListItem({backup}: BackupListItemProps) {
  return (
    <li className='BackupListItem'>
      {backup.name}
    </li>
  );
};
