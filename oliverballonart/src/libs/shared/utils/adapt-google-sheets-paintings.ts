import { GoogleSheetsResponsePainting } from '../+data/models/google-sheets-repsonse-painting';

export const adaptGoogleSheetsPaintingsResponse = (
  sheetsResp: GoogleSheetsResponsePainting
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
