import ENUMS from './enums';

const CREATE_USER_DEFAULT_DATA = {
    personal_trainings: [],
    shared_trainings: [],
    personal_data: {
        weight: null,
        gender: null,
        height: null,
        birthday: null,
        country: null,
        description: null,
        metric_type: ENUMS.METRIC_ENUM.METRIC,
    },
    posts: [],
    followers: [],
    following: [],
}

export default {
    CREATE_USER_DEFAULT_DATA,
}