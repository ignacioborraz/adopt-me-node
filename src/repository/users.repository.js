import dao from "../dao/factory.js";
import UserDTO from "../dto/users.dto.js";

export default class UsersRepository {
  constructor() {
    this.model = new dao.User();
  }
  create = async (data, next) => {};
  getAll = async (params, next) => {};
  getBy = async (params, next) => {};
  getUserByEmail = async (email, next) => {};
  getUserById = async (id, next) => {};
  update = async (id, data, next) => {};
  delete = async (id, next) => {};
}
