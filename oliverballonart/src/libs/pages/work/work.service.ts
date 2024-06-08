import { Injectable, Signal, WritableSignal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Injectable()
export class WorkService {
  api = inject(ApiService);
  store = inject(WorksStore);

  vm = {
    work: this.store.Work,
  };

  getWork(uid: string) {
    this.api.getPainting(uid);
    console.log(this.vm.work);

    this.vm.work = this.store.Work;
  }
}
