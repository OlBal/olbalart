import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../app/environment';
import { GoogleSheetsResponse } from '../models/google-sheets-repsonse';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGoogleSheetPaintings2024(): Observable<any> {
    const req = environment.googleSheets.replace(
      '<worksheet_name>',
      'paintings2024'
    );
    return this.http.get<GoogleSheetsResponse>(req);
  }

  getGoogleSheetPaintings2023(): Observable<any> {
    const req = environment.googleSheets.replace(
      '<worksheet_name>',
      'paintings2023'
    );
    return this.http.get<GoogleSheetsResponse>(req);
  }

  getGoogleSheetPaintings2022(): Observable<any> {
    const req = environment.googleSheets.replace(
      '<worksheet_name>',
      'paintings2022'
    );
    return this.http.get<GoogleSheetsResponse>(req);
  }

  getGoogleSheetPaintings2021(): Observable<any> {
    const req = environment.googleSheets.replace(
      '<worksheet_name>',
      'paintings2021'
    );
    return this.http.get<GoogleSheetsResponse>(req);
  }

  getGoogleSheetExhibtions(): Observable<any> {
    const req = environment.googleSheets.replace(
      '<worksheet_name>',
      'exhibitions'
    );
    return this.http.get<GoogleSheetsResponse>(req);
  }
}
