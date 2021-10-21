import { Preset } from './preset';
import { Backup } from './backup';
import request from './request';

export interface Server {
  name: string;
  port: number;
  created?: string;
  volume?: string;
}

async function getServers(): Promise<Server[]> { 
  const res = await request.get('/server');
  return res.data.servers;
}

async function getServer(name: string): Promise<Server> { 
  const res = await request.get(`/server/${name}`);
  return res.data.server;
}

export interface CreateServerOptions {
  preset?: Preset;
  backup?: Backup;
}

async function createServer(server: Server, options: CreateServerOptions = {}) { 
  await request.post(`/server/${server.name}`, { server, ...options});
}

async function putServer(server: Server) { 
  await request.put(`/server/${server.name}`, { server });
}

async function deleteServer(server: Server) { 
  await request.delete(`/server/${server.name}`);
}

export interface ServerEnv {
  [key: string]: string,
}

async function getServerEnv(server: Server): Promise<ServerEnv> {
  const res = await request.get(`/server/${server.name}/env`);
  return res.data.env;
};

async function putServerEnv(server: Server, env: ServerEnv) {
  await request.put(`/server/${server.name}/env`, { env });
};

async function getServerStatus(server: Server): Promise<string> {
  const res = await request.get(`/server/${server.name}/status`);
  return res.data.status;
};

async function serverOn(server: Server) {
  await request.post(`/server/${server.name}/on`);
};

async function serverOff(server: Server) {
  await request.post(`/server/${server.name}/off`);
};

async function backupServer(server: Server) {
  await request.post(`/server/${server.name}/backup`);
};

const server = {
  getServers,
  getServer,
  createServer,
  putServer,
  deleteServer,
  getServerEnv,
  putServerEnv,
  getServerStatus,
  serverOn,
  serverOff,
  backupServer,
};

export default server;
