import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { ListComponent } from 'src/libs/shared/components/list/list.component';
import { WorksService } from './works.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [GalleryComponent, ListComponent],
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
      @if(ws.vm.display === 'grid'){
      <app-gallery [images]="ws.vm.works()"></app-gallery>
      } @else{
      <app-list [rows]="ws.vm.works()"></app-list>
      }
    </div>
  `,
})
export class WorksComponent {
  ws = inject(WorksService);
  viewToggle = false;

  toggleView() {
    this.viewToggle = !this.viewToggle;
    this.ws.vm.display = this.viewToggle ? 'grid' : 'list';
  }
}
