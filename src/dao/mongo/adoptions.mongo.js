import Adoption from "./models/adoption.model.js";

export default class AdoptionsMongo {
  create = async (data, next) => {
    try {
      return await Adoption.create(data);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  getAll = async ({ page, skip, limit }, next) => {
    try {
      let pages = await Adoption.countDocuments();
      pages = Math.ceil(pages / limit);
      let prev = Number(page) === 1 ? null : Number(page) - 1;
      let next = Number(page) === pages ? null : Number(page) + 1;
      let adoptions = await Adoption.find()
        .skip(skip)
        .limit(limit)
        .populate("owner")
        .populate("pet");
      return { prev, next, adoptions };
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  getBy = async (id, next) => {
    try {
      return await Adoption.findById(id).populate("owner").populate("pet");
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  update = async (id, data, next) => {
    try {
      return await Adoption.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
  delete = async (id, next) => {
    try {
      return await Adoption.findByIdAndDelete(id);
    } catch (error) {
      error.where = "mongo";
      return next(error);
    }
  };
}
