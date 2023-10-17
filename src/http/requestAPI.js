import {$host, $authHost} from './index';

export const createCategory = async (category) => {
  const {data} = await $authHost.post('api/category', category);
  return data;
};

export const fetchCategories = async () => {
  const {data} = await $host.get('api/category');
  return data;
};

export const createAgent = async (agent) => {
  const {data} = await $authHost.post('api/agent', agent);
  return data;
};

export const fetchAgents = async () => {
  const {data} = await $host.get('api/agent');
  return data;
};

export const createClient = async (client) => {
  const {data} = await $authHost.post('api/client', client);
  return data;
};

export const fetchClients = async () => {
  const {data} = await $host.get('api/client');
  return data;
};

export const createStatus = async (status) => {
  const {data} = await $authHost.post('api/status', status);
  return data;
};

export const fetchStatuses = async () => {
  const {data} = await $host.get('api/status');
  return data;
};

export const createPriority = async (priority) => {
  const {data} = await $authHost.post('api/priority', priority);
  return data;
};

export const fetchPriorities = async () => {
  const {data} = await $host.get('api/priority');
  return data;
};

export const createRequest = async (request) => {
  const {data} = await $authHost.post('api/request', request);
  return data;
};

export const fetchRequests = async () => {
  const {data} = await $host.get('api/request');
  return data;
};

export const fetchOneRequest = async (id) => {
  const {data} = await $host.get('api/request/' + id);
  return data;
};

export const deleteRequest = async (id) => {
  const {res} = await $host.delete('api/request/delete/' + id);
  return res;
};