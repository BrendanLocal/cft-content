export function findBySessionIDAndType(db, sessionID, type) {
  return db.collection('calcData').findOne({
    sessionID: sessionID,
    type: type
  });
}

export async function insertCalcData(db, sessionID, type, data) {
  return db
    .collection('calcData')
    .insertOne({
      sessionID: sessionID,
      type: type,
      data: data
    })
    .then(({ ops }) => ops[0]);
}

export async function updateCalcData(db, sessionID, type, data) {
  return db
    .collection('calcData').findOneAndUpdate(
      { sessionID: sessionID, type: type },
      { $set: { data: data } },
      { returnOriginal: false },
    ).then(({ value }) => value);
}