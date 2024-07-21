import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [NgClass],
  styleUrl: 'img.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      [src]="src() ?? ''"
      [alt]="alt()"
      class="w-full h-auto object-cover transition-transform transform scale-100 shadow-md"
      loading="lazy"
      [width]="width()"
      [height]="height()"
      [ngClass]="{ loaded: 'loaded' }"
    />
  `,
})
export class ImgComponent {
  src = input.required<string | undefined>();
  alt = input.required<string | undefined>();
  uid = input.required<string | undefined | null>();
  width = input.required<number | undefined>();
  height = input.required<number | undefined>();
  loaded = signal(false);
}
