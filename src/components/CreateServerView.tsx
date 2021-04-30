import React, { useState, useEffect } from 'react';
import { CreateServerOptions } from '../api/server';
import { Preset } from '../api/preset';
import { Backup } from '../api/backup';
import { useHistory } from 'react-router-dom';
import api from '../api';

export default function CreateServerView() {
  const [name, setName] = useState<string>('');
  const [port, setPort] = useState<number>(25565);
  const [presetName, setPresetName] = useState<string>('');
  const [backupName, setBackupName] = useState<string>('');

  const [presets, setPresets] = useState<Preset[] | null>(null);
  const [backups, setBackups] = useState<Backup[] | null>(null);

  const history = useHistory();

  useEffect(() => {
    api.preset.getPresets().then(presets => setPresets(presets));
    api.backup.getBackups().then(backups => setBackups(backups));
  }, []);

  return (
    <div className='CreateServerView'>
      <form onSubmit={async e => {
        e.preventDefault();
        let options: CreateServerOptions = {};
        if (presetName !== '') {
          options.preset = { name: presetName };
        }
        if (backupName !== '') {
          options.backup = { name: backupName };
        }
        try {
          await api.server.createServer({ name, port }, options);
        } catch (e) {
          console.dir(e);
        }
        
        history.push('/server/' + name);
      }}>
        <label>Name: </label>
        <br />
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='my-server'
        />
        <br />
        <label>Port: </label>
        <br />
        <input
          type='number'
          value={port}
          onChange={e => setPort(parseInt(e.target.value))}
        />
        <br />
        <label>Use Preset:</label>
        <br />
        <select
          disabled={!presets}
          value={presetName}
          onChange={e => setPresetName(e.target.value)}
        >
          <option value="">None</option>
          {
            presets && presets.map(preset => <option value={preset.name} key={preset.name}>
              {preset.name}
            </option>)
          }
        </select>
        <br />
        <label>From Backup:</label>
        <br />
        <select
          disabled={!backups}
          value={backupName}
          onChange={e => setBackupName(e.target.value)}
        >
          <option value="">None</option>
          {
            backups && backups.map(backup => <option value={backup.name} key={backup.name}>
              {backup.name}
            </option>)
          }
        </select>
        <br />
        <input type='submit' value='Create'/>
      </form>
    </div>
  );
}
