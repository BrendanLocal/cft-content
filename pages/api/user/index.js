import nc from 'next-connect';
import multer from 'multer';
import { all } from '../../../middlewares/index';
import { updateUserById } from '../../../db/index';
import { extractUser } from '../../../lib/api-helpers';

const upload = multer({ dest: '/tmp' });
const handler = nc();


handler.use(all);

handler.get(async (req, res) => {
  // Filter out password
  if (!req.user) return res.json({ user: null });
  const { password, ...u } = req.user;
  res.json({ user: u });
});

handler, async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
  const { name, bio, lat, long } = req.body;
  const user = await updateUserById(req.db, req.user._id, {
    ...(name && { name }),
    ...(lat && {lat}),
    ...(long && {long}),
    ...(profilePicture && { profilePicture }),
  });

  res.json({ user: extractUser(user) });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
