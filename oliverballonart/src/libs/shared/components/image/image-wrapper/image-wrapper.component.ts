import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { ApiService } from 'src/libs/shared/+data/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-wrapper',
  standalone: true,
  imports: [ImgComponent],
  template: ` <a type="button" (click)="updateUid(uid())">
    <figure class="m-1">
      <ng-content></ng-content>
    </figure>
  </a>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapperComponent {
  uid = input.required<string | null>();
  router = inject(Router);

  artworkToViewUid = signal('');

  updateUid(uid: string | null) {
    this.artworkToViewUid.set(uid ?? '');
    this.router.navigate([`works/${uid}`]);
  }
}
