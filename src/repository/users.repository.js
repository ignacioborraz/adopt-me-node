import dao from "../dao/factory.js";
import UserDTO from "../dto/users.dto.js";

export default class UsersRepository {
  constructor() {
    this.model = new dao.User();
  }
  create = async (data, next) => {
    try {
      data = await UserDTO.getUserInputFrom(data);
      let response = await this.model.create(data, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getAll = async (params, next) => {
    try {
      let response = await this.model.getAll(params, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getBy = async (params, next) => {
    try {
      let response = await this.model.getBy(params, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getUserByEmail = async (email, next) => {
    try {
      let response = await this.model.getBy({ email }, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  getUserById = async (id, next) => {
    try {
      let response = await this.model.getBy({ _id: id }, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      let response = await this.model.update(id, data, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      let response = await this.model.delete(id, next);
      return response;
    } catch (error) {
      error.where = "repository";
      return next(error);
    }
  };
}
