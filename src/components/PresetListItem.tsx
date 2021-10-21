import React from 'react';
import { Preset } from '../api/preset';
import { Link } from 'react-router-dom';

interface PresetListItemProps {
  preset: Preset;
}

export default function PresetListItem({preset}: PresetListItemProps) {
  return (
    <li className='PresetListItem'>
      <Link to={ '/preset/' + preset.name }>
        {preset.name}
      </Link>
    </li>
  );
};
