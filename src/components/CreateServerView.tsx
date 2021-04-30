import React, { useState, useEffect } from 'react';
import { CreateServerOptions } from '../api/server';
import { useHistory } from 'react-router-dom';
import api from '../api';

export default function CreateServerView() {
  const [name, setName] = useState<string>('');
  const [port, setPort] = useState<number>(25565);
  const [isUsingPreset, setUsingPreset] = useState<boolean>(false);
  const [presetName, setPresetName] = useState<string>('');
  const [isFromBackup, setFromBackup] = useState<boolean>(false);
  const [backupName, setBackupName] = useState<string>('');

  const history = useHistory();

  return (
    <div className='CreateServerView'>
      <form onSubmit={async e => {
        e.preventDefault();
        let options: CreateServerOptions = {};
        if (isUsingPreset) {
          options.preset = { name: presetName };
        }
        if (isFromBackup) {
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
        <label>Use Preset</label>
        <input
          type='checkbox'
          checked={isUsingPreset}
          onChange={e => setUsingPreset(e.target.checked)}
          placeholder='some-backup'
        />
        <br />
        <input
          type='text'
          disabled={!isUsingPreset}
          value={presetName}
          onChange={e => setPresetName(e.target.value)}
          placeholder='vanilla'
        />
        <br />
        <label>From Backup</label>
        <input
          type='checkbox'
          checked={isFromBackup}
          onChange={e => setFromBackup(e.target.checked)}
          placeholder='some-backup'
        />
        <br />
        <input
          type='text'
          value={backupName}
          disabled={!isFromBackup}
          onChange={e => setBackupName(e.target.value)}
          placeholder='some-backup'
        />
        <br />
        <input type='submit' value='Create'/>
      </form>
    </div>
  );
}
