import { Component, Input, input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Painting } from '../../+data/models/painting-response';
import { ImageWrapperComponent } from '../image/image-wrapper/image-wrapper.component';
import { ImgComponent } from '../image/img/img.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageWrapperComponent, ImgComponent, NgFor, NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = input.required<Painting[] | undefined>();
  // @Input() displayType: DisplayType;
}
