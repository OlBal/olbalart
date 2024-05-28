import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { SheetsService } from 'src/libs/shared/+data/google-sheets/sheets.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { ListComponent } from 'src/libs/shared/components/list/list.component';
import { Painting } from 'src/libs/shared/+data/models/painting-response';
import { Router } from '@angular/router';
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, GalleryComponent, ListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <menu class="flex justify-start mx-2">
      <li>
        <button class="h5" (click)="toggleView()">
          {{ viewToggle ? 'Grid' : 'List' }}
        </button>
      </li>

      <li>
        <button class="h5 mx-2" (click)="toggleView()">
          {{ viewToggle ? 'Grid' : 'List' }}
        </button>
      </li>
    </menu>

    <div class="w-full flex justify-center">
      @if(display === 'grid'){
      <app-gallery [images]="works"></app-gallery>
      } @else{
      <app-list [rows]="works"></app-list>
      }
    </div>
  `,
  providers: [SheetsService],
})
export class WorksComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  display: 'grid' | 'list' = 'grid';
  works: Painting[] = [];
  activeRoute = signal('');
  viewToggle = false;
  constructor(private sheetsService: SheetsService, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.set(this.router.url);
    combineLatest([
      this.sheetsService.getSheets2024(),
      this.sheetsService.getSheets2023(),
      this.sheetsService.getSheets2022(),
    ])
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(([sheets2024, sheets2023, sheets2022]) => [
          ...sheets2024,
          ...sheets2023,
          ...sheets2022,
        ])
      )
      .subscribe((res: any) => {
        console.log(res);
        this.works = res;
      });
  }

  toggleView() {
    this.viewToggle = !this.viewToggle;
    this.display = this.viewToggle ? 'grid' : 'list';
  }
}
