import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { Image } from '../models/image.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageComponent, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() images?: Image[];
}
