import { GraphQLObjectType, GraphQLSchema } from "graphql";
import usersSchema from './schemas/usersSchema';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        getUserById: usersSchema.getUserById,
        getAllUsers: usersSchema.getAllUsers,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        createUser: usersSchema.createUser,
        authorize: usersSchema.authorize
    }
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});