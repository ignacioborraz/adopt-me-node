import AdoptionsRepository from "../repository/adoptions.repository.js";

export default class AdoptionsService {
  constructor() {
    this.repository = new AdoptionsRepository();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
