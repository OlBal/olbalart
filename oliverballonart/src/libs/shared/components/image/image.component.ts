import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [Input, NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() image!: Image;
}
