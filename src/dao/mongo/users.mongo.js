import User from "./models/user.model.js";
import UserResponseDTO from "../../dto/users.response.dto.js";

export default class UsersMongo {
  create = async (data, next) => {
    try {
      let result = await User.create(data);
      result = UserResponseDTO.getUserDbFrom(result);
      return result;
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  getAll = async (params, next) => {
    try {
      return await User.find(params, "-password");
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  getBy = async (params, next) => {
    try {
      return await User.findOne(params);
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      return await User.findByIdAndUpdate(id, { $set: data });
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
}
