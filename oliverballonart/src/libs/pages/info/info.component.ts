import { NgFor } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SheetsService } from 'src/libs/shared/+data/google-sheets/sheets.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  providers: [SheetsService],
})
export class InfoComponent implements OnInit {
  exhibitions: string[] = [];

  constructor(private sheetsService: SheetsService) {}

  ngOnInit() {
    this.sheetsService
      .getExhibitions()
      .pipe()
      .subscribe((items) => (this.exhibitions = items.reverse()));
  }
}
