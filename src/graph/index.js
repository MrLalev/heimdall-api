import { GraphQLObjectType, GraphQLSchema } from "graphql";
import usersSchema from './schemas/usersSchema';
import exercisesSchema from './schemas/exercisesSchema';
import serviceDataSchema from './schemas/serviceDataSchema';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        getUsers: usersSchema.getUsers,
        getExercises: exercisesSchema.getExercises,
        getGenderList: serviceDataSchema.getGenderList,
        getMetricList: serviceDataSchema.getMetricList,
        getMuscleGroupList: serviceDataSchema.getMuscleGroupList
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        createUser: usersSchema.createUser,
        authorize: usersSchema.authorize,
        createExercise: exercisesSchema.createExercise,
    }
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});