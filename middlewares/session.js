import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';

const MongoStore = new connectMongo(session);
mongoose.Promise = global.Promise;

export default function sessionMiddleware(req, res, next) {
  const mongoStore = MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })(req, res, next);
}


