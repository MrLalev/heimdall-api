import { GraphQLObjectType, GraphQLSchema } from "graphql";
import usersSchema from './schemas/usersSchema';
import exercisesSchema from './schemas/exercisesSchema';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        getUserById: usersSchema.getUserById,
        getAllUsers: usersSchema.getAllUsers,
        getExercises: exercisesSchema.getExercises,
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