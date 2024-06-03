import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  styleUrl: 'img.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      ngOptimizedImage
      [ngSrc]="src() ?? ''"
      [alt]="alt()"
      class="w-full h-auto object-cover transition-transform transform scale-100 shadow-md"
      loading="lazy"
      [width]="100"
      [height]="100"
      [ngClass]="{ loaded: 'loaded' }"
      referrerpolicy="no-referrer"
    />
  `,
})
export class ImgComponent {
  src = input.required<string | undefined>();
  alt = input.required<string | undefined>();
  uid = input.required<string | undefined | null>();

  loaded = signal(false);
}
