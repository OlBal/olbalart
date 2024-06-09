import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, mergeMap, map, distinctUntilChanged } from 'rxjs';

@Inject({
  selector: 'app-image-intersect-loading-component',
  standalone: true,
  imports: [NgIf],
})
export class IntersectObserverService {
  // createAndObserve(element: ElementRef): Observable<boolean> {
  //   return new Observable((observer) => {
  //     const intersectionObserver = new IntersectionObserver((entries) => {
  //       observer.next(entries);
  //     });
  //     intersectionObserver.observe(element.nativeElement);
  //     return () => {
  //       intersectionObserver.disconnect();
  //     };
  //   }).pipe(
  //     mergeMap((entries: IntersectionObserverEntry[]) => entries),
  //     map((entry) => entry.isIntersecting),
  //     distinctUntilChanged()
  //   );
  // }
}
