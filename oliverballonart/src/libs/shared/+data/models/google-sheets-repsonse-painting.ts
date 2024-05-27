import { GoogleSheetsResponse } from './google-sheets-repsonse';
import { Painting } from './painting-response';

export interface GoogleSheetsResponsePainting extends GoogleSheetsResponse {
  values: Painting[][];
}
