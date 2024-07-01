import { Router } from 'express';
import createScreenLogger from '../utils/logger';

const router = Router();

router.post('/log', (req, res) => {
  const { message, level, screenName, isBackend } = req.body;
  const logger = createScreenLogger(screenName, isBackend);

  if (level === 'error') {
    logger.error(message);
  } else if (level === 'warn') {
    logger.warn(message);
  } else {
    logger.info(message);
  }

  res.status(200).json({ success: true });
});

export default router;