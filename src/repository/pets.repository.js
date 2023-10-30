import dao from "../dao/factory.js";
import PetDTO from "../dto/pets.dto.js";

export default class PetsRepository {
  constructor() {
    this.model = new dao.Pet();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
