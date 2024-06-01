import {
  DestroyRef,
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { Painting } from 'src/libs/shared/+data/models/painting-response';

export interface WorksViewModel {
  display: 'grid' | 'list';
  works: Signal<Painting[] | undefined>;
  activeRoute: WritableSignal<string>;
  viewToggle: boolean;
}

@Injectable()
export class WorksService {
  vm: WorksViewModel = {
    display: 'grid',
    activeRoute: signal<string>(''),
    viewToggle: false,
    works: signal([]),
  };

  api = inject(ApiService);
  router = inject(Router);
  destroyRef = inject(DestroyRef);

  constructor() {
    this.vm.works = signal<Painting[] | undefined>([]);
    this.vm.works = toSignal(this.api.getAllPaintings());
  }

  setActiveRoute() {
    this.vm.activeRoute.set(this.router.url);
  }
}
