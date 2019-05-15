import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getExercises = { 
    type: new GraphQLList(types.exerciseTypes.ExerciseType),
    resolve: async(parent, args, context, info) => resolvers.exerciseResolvers.get(parent, args, context, info)
};

const createExercise = { 
    type: types.exerciseTypes.ExerciseType,
    args: {
        input: {
            type: new GraphQLNonNull(types.exerciseTypes.ExerciseInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.exerciseResolvers.create(parent, args, context, info)
};

export default {
    getExercises,
    createExercise,
};