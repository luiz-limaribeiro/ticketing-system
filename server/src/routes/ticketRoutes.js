import { Router } from 'express';
import * as TicketController from '../controllers/ticketController.js';

const router = Router();

router.post('/', TicketController.create);
router.get('/', TicketController.list);
router.get('/:id', TicketController.findById);
router.patch('/:id/status', TicketController.updateStatus);

export default router;
