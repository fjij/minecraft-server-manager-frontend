import React, { useEffect, useState } from 'react';
import { Preset } from '../api/preset';
import api from '../api';
import PresetListItem from './PresetListItem';
import { useHistory } from 'react-router-dom';

export default function PresetList() {
  const [presets, setPresets] = useState<Preset[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    api.preset.getPresets().then(presets => setPresets(presets));
  }, [])

  return (
    <div className='PresetList Page'>
      <h1>Presets</h1>
      <ul>
        {presets && presets.map(p => <PresetListItem preset={p} key={p.name}/>)}
      </ul>
      <button onClick={() => {
        history.push('/create-preset');
      }}>New</button>
    </div>
  );
}
