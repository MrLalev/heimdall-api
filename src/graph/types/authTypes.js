import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";

const AuthPayloadType = new GraphQLObjectType({
    name: 'AuthPayloadType',
    fields: () => ({
        token: {
            type: GraphQLString
        },
        refreshToken: {
            type: GraphQLString
        },
    })
});

const AuthInputType = new GraphQLInputObjectType({
    name: 'AuthInputType',
    fields: () => ({
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
    })
});

export default {
    AuthPayloadType,
    AuthInputType
}