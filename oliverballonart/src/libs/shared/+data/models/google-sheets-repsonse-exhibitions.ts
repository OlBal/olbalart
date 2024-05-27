import { GoogleSheetsResponse } from './google-sheets-repsonse';

export interface GoogleSheetsResponseExhibitions extends GoogleSheetsResponse {
  values: string[][];
}
