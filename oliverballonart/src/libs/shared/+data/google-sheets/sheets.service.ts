import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs';
import { adaptGoogleSheetsPaintingsResponse } from '../../utils/adapt-google-sheets-paintings';
import { adaptGoogleSheetsExhibitionsResponse } from '../../utils/adapt-google-sheets-exhibitions';

@Injectable()
export class SheetsService {
  constructor(private api: ApiService) {}

  getSheets2024() {
    return this.api
      .getGoogleSheetPaintings2024()
      .pipe(map((res) => adaptGoogleSheetsPaintingsResponse(res)));
  }

  getSheets2023() {
    return this.api
      .getGoogleSheetPaintings2023()
      .pipe(map((res) => adaptGoogleSheetsPaintingsResponse(res)));
  }

  getSheets2022() {
    return this.api
      .getGoogleSheetPaintings2022()
      .pipe(map((res) => adaptGoogleSheetsPaintingsResponse(res)));
  }

  getSheets2021() {
    return this.api
      .getGoogleSheetPaintings2022()
      .pipe(map((res) => adaptGoogleSheetsPaintingsResponse(res)));
  }

  getExhibitions() {
    return this.api
      .getGoogleSheetExhibtions()
      .pipe(map((res) => adaptGoogleSheetsExhibitionsResponse(res)));
  }
}
