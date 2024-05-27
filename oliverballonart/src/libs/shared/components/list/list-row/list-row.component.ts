import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImgComponent } from '../../image/img/img.component';
import { NgClass, NgIf } from '@angular/common';
import { Painting } from 'src/libs/shared/+data/models/painting-response';

@Component({
  selector: 'app-list-row',
  standalone: true,
  imports: [ImgComponent, NgClass, NgIf],
  templateUrl: './list-row.component.html',
  styleUrl: './list-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRowComponent {
  @Input() row?: Painting;
  preview = false;

  displayPreview(display: boolean) {
    this.preview = display;
  }
}
