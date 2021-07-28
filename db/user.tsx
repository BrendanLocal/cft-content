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
      name,
      longitude: 52.548559, 
    latitude: -88.145779,
    trees: 70000,
    acres: 20,
    type: "Boreal",
    status: "Prepare",
    net: 85,
    engagement: 20000,
    biodiversity: 20,
    location: "New Brunswick",
    country: "Canada"
    })
    .then(({ ops }) => ops[0]);
}


