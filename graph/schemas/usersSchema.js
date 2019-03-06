import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getAllUsers = { 
    type: new GraphQLList(types.userTypes.UserType),
    resolve: resolvers.userResolvers.getAll()
};

const getUserById = { 
    type: types.userTypes.UserType,
    args: {
        id: {
            type: GraphQLString,
        }    
    },
    resolve: resolvers.userResolvers.getById()
};

const createUser = { 
    type: types.userTypes.UserType,
    args: {
        input: {
            type: new GraphQLNonNull(types.userTypes.UserInputType),
        },
    },
    resolve: resolvers.userResolvers.create()
};

const authorization = { 
    type: types.authTypes.AuthPayloadType,
    args: {
        input: {
            type: new GraphQLNonNull(types.authTypes.AuthInputType),
        },
    },
    resolve: resolvers.userResolvers.authorize()
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    authorization
};