import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getUsers = { 
    type: new GraphQLList(types.userTypes.UserType),
    resolve: async(parent, args, context, info) => resolvers.userResolvers.get(parent, args, context, info)
};

// const getUserById = { 
//     type: types.userTypes.UserType,
//     args: {
//         id: {
//             type: GraphQLString,
//         }    
//     },
//     resolve: async(parent, args, context, info) => resolvers.userResolvers.getById(parent, args, context, info)
// };

const createUser = { 
    type: types.userTypes.UserType,
    args: {
        input: {
            type: new GraphQLNonNull(types.userTypes.UserInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.userResolvers.create(parent, args, context, info)
};

const authorize = { 
    type: types.authTypes.AuthPayloadType,
    args: {
        input: {
            type: new GraphQLNonNull(types.authTypes.AuthInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.userResolvers.authorize(parent, args, context, info)
};

export default {
    getUsers,
    createUser,
    authorize
};