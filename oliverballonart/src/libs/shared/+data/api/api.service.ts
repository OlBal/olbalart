import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { PRISMIC_REPO_NAME } from '../../../../app/environment';
import * as prismic from '@prismicio/client';
import { Painting } from '../models/painting-response';
import { Info } from '../models/info-response';

@Injectable({ providedIn: 'any' })
export class ApiService {
  client = prismic.createClient(PRISMIC_REPO_NAME);

  getAllPaintings(): Observable<Painting[] | undefined> {
    const scaleFactor = 0.1;
    const min = 50;

    return from(this.client.getAllByType('item-painting')).pipe(
      map((res): Painting[] => {
        return res.map((res): Painting => {
          console.log(res.data['dimensionw'] * scaleFactor);
          return {
            title: res.data['title'].map((x: any) => x.text),
            alt: res.data['title'].map((x: any) => x.text),
            description: res.data['description'][0],
            year: res.data['year'][0].text,
            width: res.data['dimensionw'],
            height: res.data['dimensionh'],
            scaledWidth: Math.max(res.data['dimensionw'] * scaleFactor, min),
            scaledHeight: Math.max(res.data['dimensionh'] * scaleFactor, min),
            surface: res.data['surface'].map((x: any) => x.text),
            medium: res.data['medium'][0].text,
            availability: res.data['availability'],
            src: res.data['painting'].url,
            uid: res.uid,
          };
        });
      })
    );
  }

  getPainting(uid: string): Observable<Painting | undefined> {
    const scaleFactor = 0.1;

    return from(this.client.getByUID('item-painting', uid)).pipe(
      map((res): Painting => {
        return {
          title: res.data['title'].map((x: any) => x.text),
          alt: res.data['title'].map((x: any) => x.text),
          description: res.data['description'][0],
          year: res.data['year'][0].text,
          width: res.data['dimensionw'],
          height: res.data['dimensionh'],
          scaledWidth: res.data['dimensionw'] * scaleFactor,
          scaledHeight: res.data['dimensionh'] * scaleFactor,
          surface: res.data['surface'].map((x: any) => x.text),
          medium: res.data['medium'][0].text,
          availability: res.data['availability'],
          src: res.data['painting'].url,
          uid: res.uid,
        };
      })
    );
  }

  getInfo(): Observable<Info[] | undefined> {
    return from(this.client.getAllByType('artic')).pipe(
      map((res) =>
        res.map((result): Info => {
          const res = result.data;
          return {
            title: res['title'][0].text,
            info: res['info'],
            urlLink1: res['link1'],
            urlLink2: res['link2'],
            uid: result.uid,
          };
        })
      )
    );
  }
}
