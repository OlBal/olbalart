import { Component, input, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Painting } from '../../+data/models/painting-response';
import { ImageWrapperComponent } from '../image/image-wrapper/image-wrapper.component';
import { ImgComponent } from '../image/img/img.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageWrapperComponent, ImgComponent, NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = input.required<Painting[] | undefined>();

  getWork(uid: string | null) {
    console.log(uid);
  }
}
