import { GraphQLEnumType } from "graphql";

const GenderType = new GraphQLEnumType({
    name: 'GenderType',
    values: {
        M: { value: 'M' },
        W: { value: 'W' },
    }
});

const MetricType = new GraphQLEnumType({
    name: 'MetricType',
    values: {
        IMPERIAL: { value: 'IMPERIAL' },
        METRIC: { value: 'METRIC' },
    }
});

export default {
    GenderType,
    MetricType,
}