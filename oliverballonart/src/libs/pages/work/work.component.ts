import { Component, OnInit, inject } from '@angular/core';
import { WorkService } from './work.service';
import { ImgComponent } from 'src/libs/shared/components/image/img/img.component';
import { JsonPipe, NgIf } from '@angular/common';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ImgComponent, NgIf, JsonPipe],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  providers: [WorkService],
})
export class WorkComponent implements OnInit {
  service = inject(WorkService);
  work = inject(WorksStore).work;

  ngOnInit(): void {
    this.service.getWork();
  }
}
