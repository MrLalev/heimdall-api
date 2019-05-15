import types from "../types";
import { parseQueryFields, parseFilterObject } from "../../utils/helpers";

const get = (parent, args, { models }, info) => {
   return models.ExerciseModel.find(parseFilterObject(args.where), parseQueryFields(info, types.exerciseTypes.ExerciseType));
}

const create = async(parent, { input }, { models }, info) => {
    return models.ExerciseModel.create(input);
}

export default {
    get,
    create,
}