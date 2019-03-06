import jwt from "jsonwebtoken";
import auth from "../graph/auth";

export default async(resolver, parent, args, context, info) => {
    const token = context.req.headers['x-token'];
    if (token) {
        try {
            const { user } = await jwt.verify(token, context.secret);
            context.user = user;
        } catch (error) {
            const refreshToken = context.req.headers['x-refresh-token'];
            const newTokens = await auth.refreshTokens(
                refreshToken,
                context.db,
                context.secret
            );
            if (newTokens.token && newTokens.refreshToken) {
                context.res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
                context.res.set('x-token', newTokens.token);
                context.res.set('x-refresh-token', newTokens.refreshToken);
            }
            context.user = newTokens.user;
        }
        const result = await resolver(parent, args, context, info);
        return result; 
    } 

    throw new Error("Unauthorized");
}