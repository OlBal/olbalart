import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { PRISMIC_REPO_NAME } from '../../../../app/environment';
import * as prismic from '@prismicio/client';
import { Painting } from '../models/painting-response';

@Injectable({ providedIn: 'any' })
export class ApiService {
  getAllPaintings(): Observable<Painting[] | undefined> {
    const client = prismic.createClient(PRISMIC_REPO_NAME);
    const result = from(client.getAllByType('item-painting'));
    return result.pipe(
      map((res): Painting[] =>
        res.map((result): Painting => {
          const r = result.data;
          return {
            title: r['title'].map((x: any) => x.text),
            alt: r['title'].map((x: any) => x.text),
            description: r['description'][0],
            year: r['year'][0].text,
            dimensions: r['dimensions'][0].text,
            surface: r['surface'].map((x: any) => x.text),
            medium: r['medium'][0].text,
            availability: r['availability'],
            src: r['painting'].url,
            uid: result.uid,
          };
        })
      )
    );
  }
}
