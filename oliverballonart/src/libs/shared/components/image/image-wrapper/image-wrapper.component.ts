import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-wrapper',
  standalone: true,
  imports: [ImgComponent],
  styleUrls: ['image-wrapper.component.scss'],
  template: ` <a type="button" (click)="updateUid(uid())">
    <figure class="m-1 image-container">
      <ng-content></ng-content>
    </figure>
  </a>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapperComponent {
  uid = input.required<string | null>();
  alias = output<string | null>({ alias: 'selectWork' });
  router = inject(Router);
  artworkToViewUid = signal('');

  updateUid(uid: string | null) {
    this.artworkToViewUid.set(uid ?? '');
    this.router.navigate([`${uid}`]);
    this.alias.emit(uid);
  }
}
