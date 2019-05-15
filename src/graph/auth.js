import jwt from "jsonwebtoken";
import _ from "lodash";

const createTokens = (user, secret) => {
    const createToken =  jwt.sign({
        user: _.pick(user, ['_id', 'email', 'first_name', 'last_name'])
    }, secret, { expiresIn: '1m' });

    const createRefreshToken =  jwt.sign({
        user: _.pick(user, ['_id'])
    }, secret, { expiresIn: '7d' });

    return Promise.all([createToken, createRefreshToken]);
}

const refreshTokens = async (refreshToken, models, secret) => {
   let userId = null;
   try {
       const { user: { _id } } = jwt.verify(refreshToken, secret);
       userId = _id;
   } catch (error) {
       return {};
   }

   const user = await models.UserModel.findOne({ _id: userId });
   const [newToken, newRefreshToken] = await createTokens(user, secret);

   return {
       token: newToken,
       refreshToken: newRefreshToken,
       user
   }
}

export default {
    createTokens,
    refreshTokens
}