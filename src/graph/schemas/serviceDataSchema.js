import types from "../types";
import ENUMS from "../../utils/enums";

const getSetsTypeList = { 
    type: types.enumTypes.SetsOutputType,
    resolve: async(parent, args, context, info) => {
        return Object.values(ENUMS.SETS_ENUM)
    }
};

const getGenderList = { 
    type: types.enumTypes.GenderOutputType,
    resolve: async(parent, args, context, info) => {
        return Object.values(ENUMS.GENDER_ENUM)
    }
};

const getMetricList = { 
    type: types.enumTypes.MetricOutputType,
    resolve: async(parent, args, context, info) => {
        return Object.values(ENUMS.METRIC_ENUM)
    }
};

const getMuscleGroupList = { 
    type: types.enumTypes.MuscleGroupOutputType,
    resolve: async(parent, args, context, info) => {
        return Object.values(ENUMS.MUSCLE_GROUP_TYPE_ENUM)
    }
};

export default {
    getGenderList,
    getMetricList,
    getMuscleGroupList,
    getSetsTypeList,
};