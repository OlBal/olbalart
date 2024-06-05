import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { ListComponent } from 'src/libs/shared/components/list/list.component';
import { WorksService } from './works.service';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { sortBy } from 'src/libs/shared/utils/sort.util';
import { SortType } from 'src/libs/shared/models/sort.model';
import { Painting } from 'src/libs/shared/+data/models/painting-response';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    GalleryComponent,
    ListComponent,
    RouterOutlet,
    NgClass,
    NgFor,
    TitleCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorksService],
  templateUrl: 'works.component.html',
})
export class WorksComponent implements OnInit {
  ws = inject(WorksService);
  vm = this.ws.vm;
  viewToggle = false;

  ngOnInit(): void {
    this.ws.getAllPaintings();
  }

  sortWorks(sortType: SortType) {
    this.ws.vm.works.update((works: Painting[] | undefined) => [
      ...(works as Painting[]),
      ...(sortBy(works, sortType) as Painting[]),
    ]);
  }

  toggleView() {
    this.viewToggle = !this.viewToggle;
    this.ws.vm.display = this.viewToggle ? 'grid' : 'list';
  }
}
