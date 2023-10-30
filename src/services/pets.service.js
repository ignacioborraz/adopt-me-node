import PetsRepository from "../repository/pets.repository.js";

export default class PetsService {
  constructor() {
    this.repository = new PetsRepository();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
