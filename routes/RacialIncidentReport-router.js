// Incidentes ( casos de racismos )-router.js
import express from 'express';
import { createIncidentReport, listIncidents } from '../controllers/racialincident-controller.js';

const router = express.Router();

router.get('/', listIncidents);
router.post('/', createIncidentReport);

export default router;
