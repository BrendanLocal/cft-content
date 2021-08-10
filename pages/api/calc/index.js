import nc from 'next-connect';
import { all } from '../../../middlewares/index';
import { insertCalcData, updateCalcData, findBySessionIDAndType } from '../../../db/calc';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const sessionID = req.query.sessionID;
  const type = req.query.type;

  if (!sessionID || !type) {
    res.status(400).send('Missing field(s)');
    return;
  }

  const calcData = await findBySessionIDAndType(req.db, sessionID, type);
  res.status(200).json({
    data: calcData
  });
});

handler.put(async (req, res) => {
  const sessionID = req.body.sessionID;
  const type = req.body.type;
  const data = req.body.data;

  if (!sessionID || !type || !data) {
    res.status(400).send('Missing field(s)');
    return;
  }

  let calcData;
  const existing = await findBySessionIDAndType(req.db, sessionID, type);
  if (!existing) {
    calcData = await insertCalcData(req.db, sessionID, type, data);
  }
  else {
    calcData = await updateCalcData(req.db, sessionID, type, data);
  }
  
  res.status(200).json({
    calcData: calcData
  });
});

export default handler;