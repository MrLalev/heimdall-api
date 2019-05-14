import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getAllUsers = { 
    type: new GraphQLList(types.userTypes.UserType),
    resolve: async(parent, args, context) => resolvers.userResolvers.getAll(parent, args, context)
};

const getUserById = { 
    type: types.userTypes.UserType,
    args: {
        id: {
            type: GraphQLString,
        }    
    },
    resolve: async(parent, args, context) => resolvers.userResolvers.getById(parent, args, context)
};

const createUser = { 
    type: types.userTypes.UserType,
    args: {
        input: {
            type: new GraphQLNonNull(types.userTypes.UserInputType),
        },
    },
    resolve: async(parent, args, context) => resolvers.userResolvers.create(parent, args, context)
};

const authorize = { 
    type: types.authTypes.AuthPayloadType,
    args: {
        input: {
            type: new GraphQLNonNull(types.authTypes.AuthInputType),
        },
    },
    resolve:  async(parent, args, context) => resolvers.userResolvers.authorize(parent, args, context)
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    authorize
};