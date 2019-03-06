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
        authorization: usersSchema.authorization
    }
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});