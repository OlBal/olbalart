import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { PRISMIC_REPO_NAME } from '../../../../app/environment';
import * as prismic from '@prismicio/client';
import { Painting } from '../models/painting-response';

@Injectable({ providedIn: 'any' })
export class ApiService {
  client = prismic.createClient(PRISMIC_REPO_NAME);

  getAllPaintings(): Observable<Painting[] | undefined> {
    return from(this.client.getAllByType('item-painting')).pipe(
      map((res): Painting[] =>
        res.map((res): Painting => {
          return {
            title: res.data['title'].map((x: any) => x.text),
            alt: res.data['title'].map((x: any) => x.text),
            description: res.data['description'][0],
            year: res.data['year'][0].text,
            width: res.data['dimensionW'],
            height: res.data['dimensionH'],
            surface: res.data['surface'].map((x: any) => x.text),
            medium: res.data['medium'][0].text,
            availability: res.data['availability'],
            src: res.data['painting'].url,
            uid: res.uid,
          };
        })
      )
    );
  }

  getPainting(uid: string): Observable<Painting | undefined> {
    return from(this.client.getByUID('item-painting', uid)).pipe(
      map((res): Painting => {
        return {
          title: res.data['title'].map((x: any) => x.text),
          alt: res.data['title'].map((x: any) => x.text),
          description: res.data['description'][0],
          year: res.data['year'][0].text,
          width: res.data['dimensionW'],
          height: res.data['dimensionH'],
          surface: res.data['surface'].map((x: any) => x.text),
          medium: res.data['medium'][0].text,
          availability: res.data['availability'],
          src: res.data['painting'].url,
          uid: res.uid,
        };
      })
    );
  }
}
