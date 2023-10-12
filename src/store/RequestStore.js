import {makeAutoObservable} from 'mobx';

export default class RequestStore {
  constructor() {
    this._agents = [
      {id: 1, last_name: 'Ковалёв', first_name: 'Сергей', middle_name: 'Владимирович'},
      {id: 2, last_name: 'Батищева', first_name: 'Ирина', middle_name: 'Анатольевна'},
      {id: 3, last_name: 'Смирнов', first_name: 'Дмитрий', middle_name: 'Алексеевич'},
    ];
    this._clients = [
      {id: 1, last_name: 'Федосюк', first_name: 'Виталий', middle_name: 'Анатольевич'},
      {id: 2, last_name: 'Малышева', first_name: 'Ольга', middle_name: 'Викторовна'},
    ];
    this._statuses = [
      {id: 1, name: 'В обработке'},
      {id: 2, name: 'В работе'},
      {id: 3, name: 'Выполнено'},
      {id: 4, name: 'Отклонено'},
    ];
    this._categories = [
      {id: 1, name: 'Операционная система Windows'},
      {id: 1, name: 'Офисные программы'},
      {id: 1, name: 'Система электронного документооборота'},
      {id: 1, name: 'Прикладные решения 1С'},
    ];
    this._priorities = [
      {id: 1, name: 'Низкий'},
      {id: 2, name: 'Средний'},
      {id: 3, name: 'Высокий'},
    ];
    this._requests = [
      {id: 1, description: 'Внедрить 1С-ЭДО'},
      {id: 2, description: 'Установить обновления ОС на сервере 1С'},
      {id: 3, description: 'Установить MS Office на мой ПК'},
    ];
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