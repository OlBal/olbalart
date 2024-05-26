import { GoogleSheetsResponse } from '../+data/models/google-sheets-repsonse';

export const adaptGoogleSheetsPaintingsResponse = (
  sheetsResp: GoogleSheetsResponse
) => {
  const [removed, ...items] = sheetsResp.values;

  return items.map(
    ([
      id,
      uid,
      title,
      src,
      description,
      year,
      dimensionH,
      dimensionW,
      medium,
      surface,
      availability,
    ]) => {
      return {
        id,
        uid,
        title,
        src,
        description,
        year,
        dimensionH,
        dimensionW,
        medium,
        surface,
        availability,
      };
    }
  );
};
