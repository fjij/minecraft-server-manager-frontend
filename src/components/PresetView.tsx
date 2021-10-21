import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Preset } from '../api/preset';
import { ServerEnv } from '../api/server';
import api from '../api';
import EnvView from './EnvView';
import AreYouSureButton from './AreYouSureButton';

interface PresetParamTypes {
  name: string;
}

export default function PresetView() {
  const [preset, setPreset] = useState<Preset | null>(null);
  const [isInputDisabled, setInputDisabled] = useState(false);
  const [env, setEnv] = useState<ServerEnv | null>(null);
  const { name } = useParams<PresetParamTypes>();

  const history = useHistory();

  useEffect(() => {
    api.preset.getPreset(name).then(async preset => {
      const env = await api.preset.getPresetEnv(preset);
      setPreset(preset)
      setEnv(env)
    });
  }, [name])

  return (
    <div className='PresetView Page'>
      { preset && env && <>
        <h1>{ name }</h1>
        <h4>Preset</h4>
        <ul>
          <li>Created: { preset.created }</li>
        </ul>
        <EnvView env={env} setEnv={(env) => {
          setEnv(env);
          api.preset.putPresetEnv(preset, env);
        }} />
        <div className='PresetActions'>
          <h2>Actions</h2>
          <ul>
            <li><AreYouSureButton disabled={isInputDisabled} onClick={async () => {
              setInputDisabled(true);
              await api.preset.deletePreset(preset)
              history.push('/presets');
            }}>Delete</AreYouSureButton></li>
          </ul>
        </div>
      </> }
    </div>
  );
}
