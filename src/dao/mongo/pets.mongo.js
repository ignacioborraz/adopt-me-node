import Pet from "./models/pet.model.js";

export default class PetsMongo {
  create = async (data, next) => {
    try {
      return await Pet.create(data);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  getAll = async (next) => {
    try {
      return await Pet.find();
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  getBy = async (id, next) => {
    try {
      return await Pet.findById(id);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      return await Pet.findByIdAndUpdate(id, data);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      return await Pet.findByIdAndDelete(id);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
}
