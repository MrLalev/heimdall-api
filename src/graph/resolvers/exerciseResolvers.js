import types from "../types";
import { parseQueryFields } from "../../utils/functions";

const get = (parent, args, { models }, info) => {
   return models.ExerciseModel.find({}, parseQueryFields(info, types.exerciseTypes.ExerciseType));
}

const create = async(parent, { input }, { models }, info) => {
    return models.ExerciseModel.create(input);
}

export default {
    get,
    create,
}