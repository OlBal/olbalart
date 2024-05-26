import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { NgFor } from '@angular/common';
import { SheetsPaintingsResponse } from '../../+data/models/painting-response';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageComponent, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() images?: SheetsPaintingsResponse[];
}
