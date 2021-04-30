import request from './request';
import { ServerEnv } from './server';

export interface Preset {
  name: string;
  created?: string;
}

async function getPresets(): Promise<Preset[]> {
  const res = await request.get('/preset');
  return res.data.presets;
}

async function getPreset(name: string): Promise<Preset> {
  const res = await request.get(`/preset/${name}`);
  return res.data.preset;
}

async function putPreset(preset: Preset) {
  await request.put(`/preset/${preset.name}`, { preset });
}

async function deletePreset(preset: Preset) {
  await request.delete(`/preset/${preset.name}`);
}

async function getPresetEnv(preset: Preset): Promise<ServerEnv> {
  const res = await request.get(`/preset/${preset.name}/env`);
  return res.data.env;
}

async function putPresetEnv(preset: Preset, env: ServerEnv) {
  await request.put(`/preset/${preset.name}/env`, { env });
}

const preset = {
  getPresets,
  getPreset,
  putPreset,
  deletePreset,
  getPresetEnv,
  putPresetEnv,
};

export default preset;
