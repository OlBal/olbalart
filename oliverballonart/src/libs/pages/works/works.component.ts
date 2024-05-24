import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  images = [
    { src: '../../../../public/images/IMG_2709.jpg', alt: '' },
    { src: '../../../../public/images/IMG_2709.jpg', alt: '' },
    { src: '../../../../public/images/IMG_2709.jpg', alt: '' },
    { src: '../../../../public/images/IMG_2709.jpg', alt: '' },
  ];
}
