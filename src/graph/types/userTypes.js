import { GraphQLObjectType,  GraphQLString, GraphQLFloat, GraphQLInputObjectType, GraphQLList } from "graphql";
import ENUMS from './enumTypes';

const UserPersonalDataType = new GraphQLObjectType({
    name: 'UserPersonalDataType',
    fields: () => ({
        weight: {
            type: GraphQLFloat
        },
        gender: {
            type: ENUMS.GenderType
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
            type: ENUMS.MetricType
        },
    })
});

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
        personal_trainings: {
            type: new GraphQLList(GraphQLString)
        },
        shared_trainings: {
            type: new GraphQLList(GraphQLString)
        },
        personal_data: {
            type: UserPersonalDataType
        },
        posts: {
            type: new GraphQLList(GraphQLString)
        },
        followers: {
            type: new GraphQLList(GraphQLString)
        },
        following: {
            type: new GraphQLList(GraphQLString)
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