import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img
    ngOptimizedImage
    [ngSrc]="image.src"
    [alt]="image.alt"
    class="w-full h-48 w-60 object-cover transition-transform transform scale-100"
    priority
  /> `,
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() image!: Image;
}
