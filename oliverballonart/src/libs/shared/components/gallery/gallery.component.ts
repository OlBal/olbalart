import { Component, inject, input, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Painting } from '../../+data/models/painting-response';
import { ImageWrapperComponent } from '../image/image-wrapper/image-wrapper.component';
import { ImgComponent } from '../image/img/img.component';
import { WorksStore } from '../../+data/stores/works.store';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageWrapperComponent, ImgComponent, NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = input.required<Painting[] | undefined>();
  alias = output<Painting | undefined>({ alias: 'imageData' });
  worksStore = inject(WorksStore);

  getWork(uid: string | null) {
    console.log(uid);
  }

  showImageData(image?: Painting) {
    this.worksStore.setWorkHover(image ?? null);
  }
}
