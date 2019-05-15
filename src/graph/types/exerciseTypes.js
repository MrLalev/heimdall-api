import { GraphQLObjectType, GraphQLBoolean, GraphQLInt,  GraphQLString, GraphQLFloat, GraphQLInputObjectType, GraphQLList } from "graphql";
import ENUM_TYPES from './enumTypes';

const ExerciseType = new GraphQLObjectType({
    name: 'ExerciseType',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        private: {
            type: GraphQLBoolean
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        muscle_group: {
            type: new GraphQLList(ENUM_TYPES.MuscleGroupType),
        },
        created_by: {
            type: GraphQLString
        },
        video_materials: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
    })
});

// TODO: remove private filed and created by get this information
// from logged user and set private to true
// expose new route for admin that can create private false records
const ExerciseInputType = new GraphQLInputObjectType({
    name: 'ExerciseInputType',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        private: {
            type: GraphQLBoolean
        },
        muscle_group: {
            type: new GraphQLList(ENUM_TYPES.MuscleGroupType),
        },
        created_by: {
            type: GraphQLString
        },
        video_materials: {
            type: GraphQLString
        },
    })
});

export default {
    ExerciseType,
    ExerciseInputType,
}