import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs';
import { adaptGoogleSheetsPaintingsResponse } from '../../utils/adapt-google-sheets';

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
}
