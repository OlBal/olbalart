import {
  DestroyRef,
  Injectable,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { SortType } from '../../models/sort.model';
import { sortBy } from '../../utils/sort.util';
import { ApiService } from '../api/api.service';
import { Painting } from '../models/painting-response';

@Injectable({
  providedIn: 'root',
})
export class WorksStore {
  api = inject(ApiService);
  destroyRef = inject(DestroyRef);
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

  setWork(painting: Painting) {
    console.log(painting);
    this.work.set(painting);
  }

  setWorkHover(work: Painting | null) {
    this.workHover.set(work);
  }

  setWorksBySorted(sort: SortType) {
    this.works.set(sortBy(this.works(), sort));
  }
}
