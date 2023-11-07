import UsersService from "../services/users.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

const getAllUsers = async (req, res, next) => {
  try {
    let result = await new UsersService().getAll(next);
    if (result.length > 0) {
      return res.status(200).json({ status: "success", payload: result });
    }
    return CustomError.newError(errors.notFound);
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    let uid = req.params.uid;
    let data = req.body;
    let result = await new UsersService().update(uid, data, next);
    if (result) {
      return res.status(200).json({ status: "success", payload: result._id });
    }
    return CustomError.newError(errors.notFoundOne);
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    let uid = req.params.uid;
    let result = await new UsersService().delete(uid, next);
    if (result) {
      return res.status(200).json({ status: "success", payload: result._id });
    }
    return CustomError.newError(errors.notFoundOne);
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

export { getAllUsers, updateUser, deleteUser };
