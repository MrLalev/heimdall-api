import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
        },
    })
});

const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    fields: () => ({
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    })
});

export default {
    UserType,
    UserInputType,
}