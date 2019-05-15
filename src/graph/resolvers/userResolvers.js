import bcrypt from "bcrypt";
import auth from "../auth";
import CONST from "../../utils/constants";
import types from "../types";
import { parseQueryFields, parseFilterObject } from "../../utils/helpers";

const get = async(parent, args, { models }, info) => {
    return models.UserModel.find(parseFilterObject(args.where), parseQueryFields(info, types.userTypes.UserType));
}

const create = async(parent, { input }, { models }, info) => {
    let user = input;
    user.password = await bcrypt.hash(user.password, 12);
    user = { ...user, ...CONST.CREATE_USER_DEFAULT_DATA };
    return models.UserModel.create(user);
}

const authorize = async(parent, { input }, { models, secret }, info) => {
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
    get,
    create,
    authorize
}