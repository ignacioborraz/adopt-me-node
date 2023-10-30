import UsersRepository from "../repository/users.repository.js";

export default class UsersService {
  constructor() {
    this.repository = new UsersRepository();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  getUserByEmail = async (email, next) => {};
  getUserById = async (id, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
