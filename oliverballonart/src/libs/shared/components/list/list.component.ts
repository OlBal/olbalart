import { Component, Input } from '@angular/core';
import { ListRowComponent } from './list-row/list-row.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { Painting } from '../../+data/models/painting-response';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListRowComponent, ListHeaderComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() rows: Painting[] = [];

  // screenWidth = 0;
  // 	$: if (screenWidth > 768) {
  // 		headers = headersConfig;
  // 	} else {
  // 		headers = headersConfig.filter((header) => header.title !== 'Available');
  // 	}
}
