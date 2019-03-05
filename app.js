import * as dotenv from "dotenv";
import { ApolloServer, gql } from 'apollo-server';
import mongoose from "mongoose";
import schema from "./schema";
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
    context: ({ req }) => ({
        // authScope: getScope(req.headers.authorization)
        db: { ...models },
	}), 
});

server.listen(process.env.SERVER_PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});