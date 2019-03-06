import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import schema from "./graph";
import models from "./models";

dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB');
}).on('error', (error) => {
    console.log(error);
});

const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
        // authScope: getScope(req.headers.authorization)
        db: { ...models },
        secret: process.env.SECRET,
        req,
        res
    }), 
    cors: true,
});

server.listen(process.env.SERVER_PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});