import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';
import { ImgComponent } from 'src/libs/shared/components/image/img/img.component';
import { WorkService } from './work.service';

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
  workSignal = inject(WorksStore).work;
  work = this.workSignal();

  ngOnInit(): void {
    this.service.getWork();
  }
}
