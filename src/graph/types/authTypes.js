import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";
import UserTypes from './userTypes';

const AuthPayloadType = new GraphQLObjectType({
    name: 'AuthPayloadType',
    fields: () => ({
        token: {
            type: GraphQLString
        },
        refreshToken: {
            type: GraphQLString
        },
        user: {
            type: UserTypes.UserType
        }
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