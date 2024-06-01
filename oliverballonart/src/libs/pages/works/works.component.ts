import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { ListComponent } from 'src/libs/shared/components/list/list.component';

import { WorksService, WorksViewModel } from './works.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, GalleryComponent, ListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorksService],
  template: `
    <menu class="flex justify-start mx-2">
      <li>
        <button class="h5" (click)="toggleView()">
          {{ viewToggle ? 'List' : 'Grid' }}
        </button>
      </li>
    </menu>

    <div class="w-full flex justify-center">
      @if(vm.display === 'grid'){
      <app-gallery [images]="vm.works()"></app-gallery>
      } @else{
      <app-list [rows]="vm.works()"></app-list>
      }
    </div>
  `,
})
export class WorksComponent implements OnInit {
  worksService = inject(WorksService);
  viewToggle = false;
  vm!: WorksViewModel;

  ngOnInit(): void {
    this.vm = this.worksService.vm;
  }

  toggleView() {
    this.viewToggle = !this.viewToggle;
    this.vm.display = this.viewToggle ? 'grid' : 'list';
  }
}
