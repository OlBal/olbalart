import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {}
