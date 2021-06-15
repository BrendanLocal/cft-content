import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);
const MongoDbStore = require('connect-mongo');

export default function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
      mongoUrl: process.env.MONGODB_URI
      })
  })(req, res, next);
}