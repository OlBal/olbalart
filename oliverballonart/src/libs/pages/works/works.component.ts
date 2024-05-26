import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { SheetsService } from 'src/libs/shared/+data/google-sheets/sheets.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SheetsPaintingsResponse } from 'src/libs/shared/+data/models/painting-response';
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
  images: SheetsPaintingsResponse[] = [];

  constructor(private sheetsService: SheetsService) {}

  ngOnInit(): void {
    this.sheetsService
      .getSheets2024()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res: any) => {
        console.log(res);

        this.images = res;
      });
  }
}
