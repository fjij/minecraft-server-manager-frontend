import request from './request';

export interface Backup {
  name: string;
}

async function getBackups(): Promise<Backup[]> {
  const res = await request.get('/backup');
  return res.data.backups;
}

const backup = {
  getBackups,
};

export default backup;
