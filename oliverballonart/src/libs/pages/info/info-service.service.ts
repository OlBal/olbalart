import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { InfoStore } from 'src/libs/shared/+data/stores/info.store';

@Injectable()
export class InfoService {
  api = inject(ApiService);
  store = inject(InfoStore);
  destoryRef = inject(DestroyRef);

  getInfo() {
    combineLatest([
      this.api.getContact(),
      this.api.getExhibtions(),
      this.api.getEducation(),
    ])
      .pipe(takeUntilDestroyed(this.destoryRef))
      .subscribe(([contact, exhibitions, education]) => {
        this.store.setContact(contact);
        this.store.setExhibitions(exhibitions);
        this.store.setEducation(education);
      });
  }
}
