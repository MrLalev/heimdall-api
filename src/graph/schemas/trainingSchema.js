import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";
import { GraphQLJSONObject } from "graphql-type-json";

const getTrainings = { 
    type: new GraphQLList(types.trainingTypes.TrainingType),
    args: {
        where: {
            type: GraphQLJSONObject,
        },
        restrict: {
            type: GraphQLJSONObject,
        }
    },
    resolve: async(parent, args, context, info) => resolvers.trainingResolvers.get(parent, args, context, info)
};

const createTraining = { 
    type: types.trainingTypes.TrainingType,
    args: {
        input: {
            type: new GraphQLNonNull(types.trainingTypes.TrainingInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.trainingResolvers.create(parent, args, context, info)
};

export default {
    getTrainings,
    createTraining,
};