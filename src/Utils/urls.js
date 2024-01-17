import { deploymentTypes, servers, serverType } from "../deployment-config";
let server_address =
  serverType === deploymentTypes.development
    ? servers.development
    : deploymentTypes.localDevelopment
    ? servers.localDevelopment
    : servers.production;

    
const oracleUrl = `https://ga84e97f5555b7d-llqdevatp.adb.us-sanjose-1.oraclecloudapps.com/ords/loanlinq/incident/v1`;
const baseUrlApiV1 = `https://${server_address}:8085/api/v1`;

export default {
  ticketing: {
    getAllTickets: (user_id) => `${oracleUrl}/report/user_id/${user_id}`,
  },
  support: {
    getUpdates: (incidentId) =>
      `${oracleUrl}/report/ticket_id/updates/${incidentId}`,
    getCreateTicketDropdown: (type) => `${oracleUrl}/${type}`,
    getIncidentDetails: (incidentId) =>
      `${oracleUrl}/report/ticket_id/${incidentId}`,
    getAttachments: (incidentId) =>
      `${baseUrlApiV1}/get_support_ticket_attachments/${incidentId}`,
    getSingleAttachment: (name) =>
      `${baseUrlApiV1}/get_support_ticket_attachment/${name}`,
    postTicket: () => `${oracleUrl}/create`,
    postUploadAttachments: `${baseUrlApiV1}/upload_attachments`,
    postUpdate: (incidentId) =>
      `${oracleUrl}/report/ticket_id/updates/${incidentId}`,
  },
};
