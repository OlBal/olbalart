import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Injectable()
export class WorkService {
  private api = inject(ApiService);
  private store = inject(WorksStore);
  private destroyRef = inject(DestroyRef);
  private activeRoute = inject(ActivatedRoute);

  getWork() {
    const uid = this.activeRoute.snapshot.params['uid'];
    this.api
      .getPainting(uid)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((painting) => {
          if (painting) this.store.setWork(painting);
        })
      )
      .subscribe();
  }
}
