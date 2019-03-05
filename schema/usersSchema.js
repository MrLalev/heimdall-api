import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

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
    })
});

const GetAllUsers = { 
    type: new GraphQLList(UserType),
    resolve(parent, args, context) {
        return context.db.UserModel.find();
    }
};

const GetUserById = { 
    type: new GraphQLList(UserType),
    args: {
        id: { 
            type: GraphQLString
        },
    },
    resolve(parent, args, context) {
        return context.db.UserModel.find({ _id: args.id});
    }
};

export default {
    GetAllUsers,
    GetUserById
};