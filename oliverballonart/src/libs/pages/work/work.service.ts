import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { Painting } from 'src/libs/shared/+data/models/painting-response';

export interface WorkViewModel {
  work: Signal<Painting | undefined>;
}

@Injectable()
export class WorkService {
  api = inject(ApiService);

  private activatedRoute = inject(ActivatedRoute);

  vm: WorkViewModel = {
    work: toSignal(
      this.api.getPainting(this.activatedRoute.snapshot.params['uid'])
    ),
  };
}
