import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Injectable()
export class WorkService {
  api = inject(ApiService);
  store = inject(WorksStore);

  vm = {
    work: this.store.work(),
  };

  getWork(uid: string) {
    this.api.getPainting(uid);
  }
}
