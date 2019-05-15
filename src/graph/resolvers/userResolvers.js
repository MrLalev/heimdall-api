import bcrypt from "bcrypt";
import auth from "../auth";
import CONST from "../../utils/constants";
import types from "../types";
import { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } from 'graphql-parse-resolve-info';

const getAll = async(parent, args, { models }, info) => {
    const parsedResolveInfoFragment = parseResolveInfo(info);
    const { fields } = simplifyParsedResolveInfoFragmentWithType(
                parsedResolveInfoFragment,
                types.userTypes.UserType
            );
    const queryFields = {};
    Object.keys(fields).forEach(key => queryFields[key] = 1);
    return models.UserModel.find({}, queryFields);
}

const getById = async(parent, args, { models }, info) => {
    return models.UserModel.findById(args.id);
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
    getAll,
    getById,
    create,
    authorize
}