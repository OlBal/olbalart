import { Injectable } from '@angular/core';
import * as prismic from '@prismicio/client';
import { Observable, from, map } from 'rxjs';
import { PRISMIC_REPO_NAME } from '../../../../app/environment';
import { Info } from '../models/info-response';
import { Painting } from '../models/painting-response';

@Injectable({ providedIn: 'any' })
export class ApiService {
  client = prismic.createClient(PRISMIC_REPO_NAME);
  scaleFactor = 0.1;

  getAllPaintings(): Observable<Painting[] | undefined> {
    const min = 50;
    return from(this.client.getAllByType('item-painting')).pipe(
      map((res): Painting[] => {
        return res.map((res): Painting => {
          return {
            title: res.data['title'].map((x: any) => x.text),
            alt: res.data['title'].map((x: any) => x.text),
            description: res.data['description'][0],
            year: res.data['year'][0].text,
            width: res.data['dimensionw'],
            height: res.data['dimensionh'],
            scaledWidth: Math.max(
              res.data['dimensionw'] * this.scaleFactor,
              min
            ),
            scaledHeight: Math.max(
              res.data['dimensionh'] * this.scaleFactor,
              min
            ),
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
    return from(this.client.getByUID('item-painting', uid)).pipe(
      map((res): Painting => {
        console.log(res);

        return {
          title: res.data['title'].map((x: any) => x.text),
          alt: res.data['title'].map((x: any) => x.text),
          description: res.data['description'][0].text,
          year: res.data['year'][0].text,
          width: res.data['dimensionw'],
          height: res.data['dimensionh'],
          scaledWidth: res.data['dimensionw'] * this.scaleFactor,
          scaledHeight: res.data['dimensionh'] * this.scaleFactor,
          surface: res.data['surface'].map((x: any) => x.text),
          medium: res.data['medium'][0].text,
          availability: res.data['availability'],
          src: res.data['painting'].url,
          uid: res.uid,
        };
      })
    );
  }

  getContact(): Observable<Info> {
    return from(this.client.getByUID('artic', 'contact')).pipe(
      map((result) => {
        const res = result.data;
        return {
          title: res['title'][0].text,
          info: res['info'],
          urlLink1: res['link1'],
          urlLink2: res['link2'],
          uid: result.uid,
        };
      })
    );
  }

  getEducation(): Observable<Info> {
    return from(this.client.getByUID('artic', 'education')).pipe(
      map((result) => {
        const res = result.data;
        return {
          title: res['title'][0].text,
          info: res['info'],
          urlLink1: res['link1'],
          urlLink2: res['link2'],
          uid: result.uid,
        };
      })
    );
  }

  getExhibtions(): Observable<Info> {
    return from(this.client.getByUID('artic', 'exhibitions')).pipe(
      map((result) => {
        const res = result.data;
        return {
          title: res['title'][0].text,
          info: res['info'],
          urlLink1: res['link1'],
          urlLink2: res['link2'],
          uid: result.uid,
        };
      })
    );
  }
}
