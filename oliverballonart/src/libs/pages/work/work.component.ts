import { Component, inject } from '@angular/core';
import { WorkService } from './work.service';
import { ImgComponent } from 'src/libs/shared/components/image/img/img.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  providers: [WorkService],
})
export class WorkComponent {
  vm = inject(WorkService).vm;
}
