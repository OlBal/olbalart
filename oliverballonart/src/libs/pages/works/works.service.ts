import {
  DestroyRef,
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { Painting } from 'src/libs/shared/+data/models/painting-response';
import { SortType } from 'src/libs/shared/models/sort.model';

export interface WorksViewModel {
  display: 'grid' | 'list';
  works: Signal<Painting[] | undefined>;
  activeRoute: WritableSignal<string>;
  viewToggle: boolean;
  displayOnCurrentRoute: boolean;
  menuOptions: SortType[];
}

@Injectable()
export class WorksService {
  api = inject(ApiService);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  activatedRoute = inject(ActivatedRoute);

  vm: WorksViewModel = {
    display: 'grid',
    activeRoute: signal<string>(''),
    viewToggle: false,
    works: toSignal(this.api.getAllPaintings()),
    displayOnCurrentRoute: this.router.url.includes('works/'),
    menuOptions: [
      'newest',
      'oldest',
      'biggest',
      'smallest',
      'medium',
      'availability',
      'blurst',
    ],
  };

  getAllPaintings() {
    console.log();
    this.api.getAllPaintings().subscribe((x) => console.log(x));

    return this.vm.works;
  }

  setActiveRoute() {
    this.vm.activeRoute.set(this.router.url);
  }
}
