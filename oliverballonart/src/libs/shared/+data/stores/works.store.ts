import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Painting } from '../models/painting-response';
import { sortBy } from '../../utils/sort.util';
import { SortType } from '../../models/sort.model';

@Injectable({
  providedIn: 'root',
})
export class WorksStore {
  worksStatus = signal(true);
  workStatus = signal(true);

  works: WritableSignal<Painting[]> = signal([]);
  work: WritableSignal<Painting> = signal({
    title: '',
    alt: '',
    description: '',
    year: '',
    width: 0,
    height: 0,
    surface: '',
    medium: '',
    availability: false,
    src: '',
    uid: null,
  });
  workHover: WritableSignal<Painting | null> = signal(null);

  setWorks(works: Painting[]) {
    this.works.set(works);
    this.works() !== works && this.worksStatus.set(false);
  }

  setWork(work: Painting) {
    this.work.set(work);
    this.work() !== work && this.workStatus.set(false);
  }

  setWorkHover(work: Painting | null) {
    this.workHover.set(work);
  }

  setWorksBySorted(sort: SortType) {
    this.works.set(sortBy(this.works(), sort));
  }
}
