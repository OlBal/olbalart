import { GoogleSheetsResponseExhibitions } from '../+data/models/google-sheets-repsonse-exhibitions';

export const adaptGoogleSheetsExhibitionsResponse = (
  sheetsResp: GoogleSheetsResponseExhibitions
) => sheetsResp.values.map(([text]) => text);
