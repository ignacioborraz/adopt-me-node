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
      let response = await User.find(params, "-password");
      return response;
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  getBy = async (params, next) => {
    try {
      let response = await User.findOne(params);
      return response;
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      let response = await User.findByIdAndUpdate(id, { $set: data });
      return response;
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      let response = await User.findByIdAndDelete(id);
      return response;
    } catch (error) {
      error.where = "persistence";
      return next(error);
    }
  };
}
