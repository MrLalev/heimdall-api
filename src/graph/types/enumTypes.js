import { GraphQLObjectType, GraphQLEnumType, GraphQLString, GraphQLList } from "graphql";
import ENUMS from "../../utils/enums";
import { graphEnumConverter } from "../../utils/helpers";

const SetsType = new GraphQLEnumType({
    name: 'SetsType',
    values: graphEnumConverter(ENUMS.SETS_ENUM)
});

const GenderType = new GraphQLEnumType({
    name: 'GenderType',
    values: graphEnumConverter(ENUMS.GENDER_ENUM)
});

const MetricType = new GraphQLEnumType({
    name: 'MetricType',
    values: graphEnumConverter(ENUMS.METRIC_ENUM)
});

const MuscleGroupType = new GraphQLEnumType({
    name: 'MuscleGroupType',
    values: graphEnumConverter(ENUMS.MUSCLE_GROUP_TYPE_ENUM)
});

const SetsOutputType = new GraphQLObjectType({
    name: 'SetsOutputType',
    fields: () => ({
        values: {
            type: new GraphQLList(GraphQLString),
        },
    })
});

const GenderOutputType = new GraphQLObjectType({
    name: 'GenderOutputType',
    fields: () => ({
        values: {
            type: new GraphQLList(GraphQLString),
        },
    })
});

const MetricOutputType = new GraphQLObjectType({
    name: 'MetricOutputType',
    fields: () => ({
        values: {
            type: new GraphQLList(GraphQLString),
        },
    })
});


const MuscleGroupOutputType = new GraphQLObjectType({
    name: 'MuscleGroupOutputType',
    fields: () => ({
        values: {
            type: new GraphQLList(GraphQLString),
        },
    })
});

export default {
    GenderType,
    MetricType,
    GenderOutputType,
    MetricOutputType,
    MuscleGroupOutputType,
    MuscleGroupType,
    SetsType,
    SetsOutputType,
}