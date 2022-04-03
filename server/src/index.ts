import { JuiceResolver } from './resolvers/juices';
import { DesertResolver } from './resolvers/desert';
import { Food } from './entities/Food';
import { User } from './entities/User';
import "reflect-metadata";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello"
// import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { createClient } from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from 'cors'
import {createConnection} from 'typeorm'
import { FoodResolver } from './resolvers/food';
import { graphqlUploadExpress } from 'graphql-upload';
import { NoodlesResolver } from './resolvers/noodles';
import { BurgerResolver } from './resolvers/burger';
import { PizzaResolver } from './resolvers/pizza';

const main = async () => {
   await createConnection({
    type:'postgres',
    database:'foodapp',
    username:'postgres',
    password:'postgres',
    logging:true,
    synchronize:true,
    entities:[Food, User]
  })
  
  const app = express();
  app.use(express.static('images'));
  app.use('/img', express.static('img'))
  const RedisStore = connectRedis(session);
  const redisClient = createClient();

  app.use(cors({
    origin:["http://localhost:3000","http://192.168.12.1:3000/"],
    credentials: true,
  }))

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: "qowiueojwojfalksdjoqiwueo",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver, 
        UserResolver,
        FoodResolver,
        NoodlesResolver, BurgerResolver,DesertResolver,JuiceResolver,NoodlesResolver,PizzaResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
    uploads: false
  });
  
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  apolloServer.applyMiddleware({ 
    app,
    cors:false });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
