import bcrypt from "bcrypt";
import auth from "../auth";
import CONST from "../../utils/constants";
import types from "../types";
import { parseQueryFields, parseFilterObject, parseRestrictFields } from "../../utils/helpers";

const get = async(parent, args, { models, user }, info) => {
    const where = { $and: [{ ...args.where}, { _id: { $ne: user._id }}]};
    return models.UserModel.find(
        parseFilterObject(where),
        parseQueryFields(info, types.userTypes.UserType),
        parseRestrictFields(args.restrict)
    );
}

const create = async(parent, { input }, { models }, info) => {
    let user = input;
    user.password = await bcrypt.hash(user.password, 12);
    user = { ...user, ...CONST.CREATE_USER_DEFAULT_DATA };
    return models.UserModel.create(user);
}

const authorize = async(parent, { input }, { models, secret }, info) => {
    const { email, password } = input;
    const user = await models.UserModel.findOne({ email }, { _id: 1, email: 1, first_name: 1, last_name: 1, password: 1 });
    const valid = user ? await bcrypt.compare(password, user.password) : false;

    if (!valid) {
        throw new Error('Error: Wrong email or password');
    }

    const [token, refreshToken] = await auth.createTokens(user, secret);

    return {
        token,
        refreshToken,
        user
    }
}

export default {
    get,
    create,
    authorize
}