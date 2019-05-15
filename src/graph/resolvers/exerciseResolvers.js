const get = (parent, args, { models }, info) => {
    return models.ExerciseModel.find();
}

const create = async(parent, { input }, { models }, info) => {
    return models.ExerciseModel.create(input);
}

export default {
    get,
    create,
}