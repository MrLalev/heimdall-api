import { 
    GraphQLObjectType,
    GraphQLInt, 
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull
} from "graphql";
import ENUM_TYPES from './enumTypes';

const UserPersonalDataType = new GraphQLObjectType({
    name: 'UserPersonalDataType',
    fields: () => ({
        weight: {
            type: GraphQLFloat
        },
        gender: {
            type: ENUM_TYPES.GenderType
        },
        height: {
            type: GraphQLFloat
        },
        birthday: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        metric_type: {
            type: ENUM_TYPES.MetricType
        },
    })
});

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        _id: {
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
        personal_trainings: {
            type: new GraphQLList(GraphQLString),
            resolve: async(parent, args, context) => {
                // TODO: add proper resolver here
                return [];
            }
        },
        shared_trainings: {
            type: new GraphQLList(GraphQLString),
            resolve: async(parent, args, context) => {
                // TODO: add proper resolver here
                return [];
            }
        },
        personal_data: {
            type: UserPersonalDataType
        },
        posts: {
            type: new GraphQLList(GraphQLString),
            resolve: async(parent, args, context) => {
                // TODO: add proper resolver here
                return [];
            }
        },
        followers: {
            type: new GraphQLList(GraphQLString)
        },
        followers_count: {
            type: GraphQLInt,
            resolve: async(parent, args, context) => {
                return parent.followers ? parent.followers.length : 0;
            }
        },
        following: {
            type: new GraphQLList(GraphQLString)
        },
        following_count: {
            type: GraphQLInt,
            resolve: async(parent, args, context) => {
                return parent.following ? parent.following.length : 0;
            }
        },
        activity_log: {
            type: new GraphQLList(GraphQLString),
            resolve: async(parent, args, context) => {
                // TODO: add proper resolver here
                return [];
            }
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
            type: new GraphQLNonNull(GraphQLString)
        },
        last_name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});

export default {
    UserType,
    UserInputType,
}