import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
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
      [ngSrc]="src"
      [alt]="alt"
      class="w-full h-auto object-cover transition-transform transform scale-100 shadow-md"
      loading="lazy"
      [width]="100"
      [height]="100"
      [ngClass]="{ loaded: 'loaded' }"
    />
  `,
})
export class ImgComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() uid!: string;

  loaded = signal(false);
}
