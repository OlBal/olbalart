import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';
import { sortBy } from 'src/libs/shared/utils/sort.util';

@Injectable()
export class WorkService {
  api = inject(ApiService);
  store = inject(WorksStore);
  destroyRef = inject(DestroyRef);

  vm = {
    work: this.store.work(),
  };

  getWork(uid: string) {
    this.api
      .getPainting(uid)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((work) => {
        if (work) this.store.setWork(work);
      });
  }
}
