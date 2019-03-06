import middleware from "../../middleware";
import bcrypt from "bcrypt";
import auth from "../auth";

const getAll = () => {
    return middleware.createMiddleware(middleware.authorizationMiddleware, (parent, args, context) => {
        return context.db.UserModel.find();
    });
}

const getById = () => {
    return middleware.createMiddleware(middleware.authorizationMiddleware, async(parent, args, context) => {
        return context.db.UserModel.findById(args.id);
    });
}

const create = () => {
    return middleware.createMiddleware(middleware.authorizationMiddleware, async(parent, args, context) => {
        const user = args.input;
        user.password = await bcrypt.hash(user.password, 12);
        return context.db.UserModel.create(user);
    })
}

const authorize = () => {
    return async(parent, args, context) => {
        const { email, password } = args.input;
        const user = await context.db.UserModel.findOne({ email });
        const valid = user ? await bcrypt.compare(password, user.password) : false;

        if (!valid) {
            throw new Error('Wrong email or password');
        }

        const [token, refreshToken] = await auth.createTokens(user, context.secret);

        return {
            token,
            refreshToken
        }
    };
}

export default {
    getAll,
    getById,
    create,
    authorize
}