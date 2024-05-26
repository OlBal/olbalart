import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img
      ngOptimizedImage
      [ngSrc]="src"
      [alt]="alt"
      class="w-full h-auto object-cover transition-transform transform scale-100 shadow-md"
      loading="lazy"
      [width]="100"
      [height]="100"
    />
  `,
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt!: string;
}
