import jwt from "jsonwebtoken";
import auth from "../graph/auth";
import models from "../models";

export default async(req, res, next) => {
    const token = req.headers['x-token'];
    if (token) {
        try {
            const { user } = await jwt.verify(token, process.env.SECRET);
            req.user = user;
        } catch (error) {
            const refreshToken = req.headers['x-refresh-token'];
            const newTokens = await auth.refreshTokens(
                refreshToken,
                models,
                process.env.SECRET
            );
            if (newTokens.token && newTokens.refreshToken) {
                res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
                res.set('x-token', newTokens.token);
                res.set('x-refresh-token', newTokens.refreshToken);
            }
            req.user = newTokens.user;
        }
    } 
    return next();
}