import {makeAutoObservable} from 'mobx';

export default class RequestStore {
  constructor() {
    this._agents = [];
    this._clients = [];
    this._statuses = [];
    this._categories = [];
    this._priorities = [];
    this._requests = [];
    makeAutoObservable(this);
  };

  setAgents(agents) {
    this._agents = agents;
  };
  setClients(clients) {
    this._clients = clients;
  };
  setStatuses(statuses) {
    this._statuses = statuses;
  };
  setCategories(categories) {
    this._categories = categories;
  };
  setPriorities(priorities) {
    this._priorities = priorities;
  };
  setRequests(requests) {
    this._requests = requests;
  };

  get agents() {
    return this._agents;
  };
  get clients() {
    return this._clients;
  };
  get statuses() {
    return this._statuses;
  };
  get categories() {
    return this._categories;
  };
  get priorities() {
    return this._priorities;
  };
  get requests() {
    return this._requests;
  };
};