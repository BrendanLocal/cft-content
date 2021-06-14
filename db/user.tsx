import { nanoid } from 'nanoid';
import normalizeEmail from 'validator/lib/normalizeEmail';

export async function findUserById(db, userId) {
  return db.collection('userData').findOne({
    _id: userId,
  }).then((user) => user || null);
}

export async function findUserByEmail(db, email) {
  email = normalizeEmail(email);
  return db.collection('userData').findOne({
    email,
  }).then((user) => user || null);
}

export async function updateUserById(db, id, update) {
  return db.collection('userData').findOneAndUpdate(
    { _id: id },
    { $set: update },
    { returnOriginal: false },
  ).then(({ value }) => value);
}

export async function insertUser(db, {
  email, password, name
}) {
  return db
    .collection('userData')
    .insertOne({
      _id: nanoid(12),
      emailVerified: false,
      email,
      password,
      name
    })
    .then(({ ops }) => ops[0]);
}
