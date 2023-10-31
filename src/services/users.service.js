import UsersRepository from "../repository/users.repository.js";

export default class UsersService {
  constructor() {
    this.repository = new UsersRepository();
  }
  create = async (data, next) => {
    try {
      let response = await this.repository.create(data, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  getAll = async (params, next) => {
    try {
      let response = await this.repository.getAll(params, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  getBy = async (params, next) => {
    try {
      let response = await this.repository.getBy(params, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  getUserByEmail = async (email, next) => {
    try {
      let response = await this.repository.getUserByEmail(email, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  getUserById = async (id, next) => {
    try {
      let response = await this.repository.getUserById(id, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      let response = await this.repository.update(id, data, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      let response = await this.repository.delete(id, next);
      return response;
    } catch (error) {
      error.where = "service";
      return next(error);
    }
  };
}
