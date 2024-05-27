import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SheetsPaintingsResponse } from '../../+data/models/painting-response';
import { ImageWrapperComponent } from '../image/image-wrapper/image-wrapper.component';
import { ImgComponent } from '../image/img/img.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageWrapperComponent, ImgComponent, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() images?: SheetsPaintingsResponse[];
  // @Input() displayType: DisplayType;
}
