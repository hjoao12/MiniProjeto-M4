import { incidents } from '../database/racialincident-db.js';
import { RacialIncident } from '../models/racialincident-model.js';

export const getIncidents = async () => {
    return incidents;
};

export const reportIncident = async (incidentData) => {
    const newIncident = new RacialIncident(
        incidentData.id,
        incidentData.location,
        incidentData.description,
        incidentData.severity
    );
    incidents.push(newIncident);
    return newIncident;
};