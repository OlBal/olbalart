import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-image-wrapper',
  standalone: true,
  imports: [ImgComponent],
  template: `<a type="button" (click)="updateUid(uid)">
    <figure class="m-1">
      <ng-content></ng-content>
    </figure>
  </a>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapperComponent {
  @Input() uid = '';

  artworkToViewUid = signal('');

  updateUid(uid: string) {
    this.artworkToViewUid.set(uid);
  }
}
