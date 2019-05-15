import ENUMS from './enums';

const CREATE_USER_DEFAULT_DATA = {
    personal_data: {
        weight: null,
        gender: null,
        height: null,
        birthday: null,
        country: null,
        description: null,
        metric_type: ENUMS.METRIC_ENUM.METRIC,
    },
    followers: [],
    following: [],
}

export default {
    CREATE_USER_DEFAULT_DATA,
}