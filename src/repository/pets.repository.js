import dao from "../dao/factory.js";
import PetDTO from "../dto/pets.dto.js";

export default class PetsRepository {
  constructor() {
    this.model = new dao.Pet();
  }
  create = async (data, next) => {
    try {
      data = PetDTO.getPetInputFrom(data);
      return this.model.create(data, next);
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getAll = async (skip, limit, next) => {
    try {
      return this.model.getAll(skip, limit, next);
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getBy = async (id, next) => {
    try {
      return this.model.getBy(id, next);
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      return this.model.update(id, data, next);
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      return this.model.delete(id, next);
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
}
