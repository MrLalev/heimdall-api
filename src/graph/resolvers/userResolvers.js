import bcrypt from "bcrypt";
import auth from "../auth";
import CONST from "../../utils/constants";

const getAll = (parent, args, { models }) => {
    return models.UserModel.find();
}

const getById = async(parent, args, { models }) => {
    return models.UserModel.findById(args.id);
}

const create = async(parent, { input }, { models }) => {
    let user = input;
    user.password = await bcrypt.hash(user.password, 12);
    user = { ...user, ...CONST.CREATE_USER_DEFAULT_DATA };
    return models.UserModel.create(user);
}

const authorize = async(parent, { input }, { models, secret }) => {
    const { email, password } = input;
    const user = await models.UserModel.findOne({ email });
    const valid = user ? await bcrypt.compare(password, user.password) : false;

    if (!valid) {
        throw new Error('Wrong email or password');
    }

    const [token, refreshToken] = await auth.createTokens(user, secret);

    return {
        token,
        refreshToken
    }
}

export default {
    getAll,
    getById,
    create,
    authorize
}