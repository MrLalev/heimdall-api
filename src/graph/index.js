import { GraphQLObjectType, GraphQLSchema } from "graphql";
import usersSchema from './schemas/usersSchema';
import exercisesSchema from './schemas/exercisesSchema';
import serviceDataSchema from './schemas/serviceDataSchema';
import trainingSchema from "./schemas/trainingSchema";

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        getUsers: usersSchema.getUsers,
        refreshUsers: usersSchema.refreshUsers,
        getExercises: exercisesSchema.getExercises,
        getGenderList: serviceDataSchema.getGenderList,
        getMetricList: serviceDataSchema.getMetricList,
        getMuscleGroupList: serviceDataSchema.getMuscleGroupList,
        getSetsTypeList: serviceDataSchema.getSetsTypeList,
        getTrainings: trainingSchema.getTrainings,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        createUser: usersSchema.createUser,
        authorize: usersSchema.authorize,
        createExercise: exercisesSchema.createExercise,
        createTraining: trainingSchema.createTraining,
    }
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});