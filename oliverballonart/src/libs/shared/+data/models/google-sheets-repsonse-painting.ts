import { GoogleSheetsResponse } from './google-sheets-repsonse';
import { SheetsPaintingsResponse } from './painting-response';

export interface GoogleSheetsResponsePainting extends GoogleSheetsResponse {
  values: SheetsPaintingsResponse[][];
}
