import dao from "../dao/factory.js";

export default class AdoptionsRepository {
  constructor() {
    this.model = new dao.Adoption();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
