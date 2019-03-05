import { GraphQLObjectType, GraphQLSchema } from "graphql";
import usersSchema from './usersSchema';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        user: usersSchema.GetUserById,
        users: usersSchema.GetAllUsers,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {}
});

export default new GraphQLSchema({
    query: QueryType,
    // mutation: RootMutation,
});