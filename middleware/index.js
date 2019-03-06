import authorizationMiddleware from "./authorizationMiddleware";

const createMiddleware = (middlewareFunc, resolverFunc) => (parent, args, context, info) =>  middlewareFunc(resolverFunc, parent, args, context, info)

export default {
    createMiddleware,
    authorizationMiddleware
}