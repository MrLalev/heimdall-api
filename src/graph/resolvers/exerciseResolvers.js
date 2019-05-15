import types from "../types";
import { parseQueryFields, parseFilterObject, parseRestrictFields } from "../../utils/helpers";

const get = (parent, args, { models }, info) => {
   return models.ExerciseModel.find(
       parseFilterObject(args.where),
       parseQueryFields(info, types.exerciseTypes.ExerciseType),
       parseRestrictFields(args.restrict)
    );
}

const create = async(parent, { input }, { models }, info) => {
    return models.ExerciseModel.create(input);
}

export default {
    get,
    create,
}