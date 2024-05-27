import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { SheetsService } from 'src/libs/shared/+data/google-sheets/sheets.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SheetsPaintingsResponse } from 'src/libs/shared/+data/models/painting-response';
import { combineLatest, map, of } from 'rxjs';
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  providers: [SheetsService],
})
export class WorksComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  vm: [] = [];

  constructor(private sheetsService: SheetsService) {}

  ngOnInit(): void {
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
        this.vm = res;
      });
  }
}
