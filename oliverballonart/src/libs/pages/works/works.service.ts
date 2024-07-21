import {
  DestroyRef,
  Injectable,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { Painting } from 'src/libs/shared/+data/models/painting-response';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';
import { SortType } from 'src/libs/shared/models/sort.model';
import { sortBy } from 'src/libs/shared/utils/sort.util';

export interface WorksViewModel {
  display: 'grid' | 'list';
  works: WritableSignal<Painting[] | undefined>;
  work: WritableSignal<Painting>;
  activeRoute: WritableSignal<string>;
  viewToggle: boolean;
  displayOnCurrentRoute: boolean;
  menuOptions: { value: string; label: string }[];
}

@Injectable()
export class WorksService {
  api = inject(ApiService);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  activatedRoute = inject(ActivatedRoute);
  store = inject(WorksStore);

  vm: WorksViewModel = {
    display: 'grid',
    activeRoute: signal<string>(''),
    viewToggle: false,
    works: this.store.works,
    work: signal<Painting>({
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
    }),
    displayOnCurrentRoute: this.router.url.includes('works/'),
    menuOptions: [
      { value: 'newest', label: 'newest' },
      { value: 'oldest', label: 'oldest' },
      { value: 'biggest', label: 'biggest' },
      { value: 'smallest', label: 'smallest' },
      { value: 'medium', label: 'medium' },
      { value: 'availability', label: 'availability' },
    ],
  };

  getAllPaintings() {
    this.api
      .getAllPaintings()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((works) => {
        if (works) this.store.setWorks(sortBy(works, 'newest'));
      });
  }

  setActiveRoute() {
    this.vm.activeRoute.set(this.router.url);
  }

  displayImageData(image: Painting) {
    this.vm.work.set(image);
  }

  sortWorks(sortBy: SortType) {
    this.store.setWorksBySorted(sortBy);
    this.vm.works.set(this.store.works());
  }
}
