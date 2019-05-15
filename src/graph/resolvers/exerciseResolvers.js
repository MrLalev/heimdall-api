const get = (parent, args, { models }) => {
    return models.ExerciseModel.find();
}

const create = async(parent, { input }, { models }) => {
    return models.ExerciseModel.create(input);
}

export default {
    get,
    create,
}