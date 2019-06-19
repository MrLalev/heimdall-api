import { 
    GraphQLObjectType,
    GraphQLInt, 
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from "graphql";
import exerciseTypes from "./exerciseTypes";
import ENUM_TYPES from './enumTypes';

const TrainingSetType = new GraphQLObjectType({
    name: 'TrainingSetType',
    fields: () => ({
        set_type: {
            type: ENUM_TYPES.SetsType
        },
        weight: {
            type: GraphQLFloat,
        },
        reps: {
            type: GraphQLInt,
        }
    })
});

const TrainingExerciseType = new GraphQLObjectType({
    name: 'TrainingExerciseType',
    fields: () => ({
        exercise: {
            type: exerciseTypes.ExerciseType
        },
        set: {
            type: new GraphQLList(TrainingSetType)
        }
    })
});

const TrainingType = new GraphQLObjectType({
    name: 'TrainingType',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        private: {
            type: GraphQLBoolean
        },
        created_by: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        relative_time: {
            type: GraphQLFloat
        },
        exercises: {
            type: new GraphQLList(TrainingExerciseType),
            resolve: async(parent, args, context) => {
                const where = { $or: parent.exercises.map(e => { return { _id: e.exercise } }) };
                const exercises = await context.models.ExerciseModel.find(where);
                return parent.exercises.map(e => {
                    e.exercise = exercises.find(x => x._id.toString() === e.exercise);
                    return e;
                });
            }
        },
        shared_with: {
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

const TrainingSetInputType = new GraphQLInputObjectType({
    name: 'TrainingSetInputType',
    fields: () => ({
        set_type: {
            type: ENUM_TYPES.SetsType
        },
        weight: {
            type: GraphQLFloat,
        },
        reps: {
            type: GraphQLInt,
        }
    })
});

const TrainingExerciseInputType = new GraphQLInputObjectType({
    name: 'TrainingExerciseInputType',
    fields: () => ({
        exercise: {
            type: GraphQLString
        },
        set: {
            type: new GraphQLList(TrainingSetInputType)
        }
    })
});

const TrainingInputType = new GraphQLInputObjectType({
    name: 'TrainingInputType',
    fields: () => ({
        private: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        created_by: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        relative_time: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        exercises: {
            type: new GraphQLNonNull(new GraphQLList(TrainingExerciseInputType))
        }
    })
});

export default {
    TrainingType,
    TrainingInputType,
}