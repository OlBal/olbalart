import { Component, Input, input } from '@angular/core';
import { ListRowComponent } from './list-row/list-row.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { Painting } from '../../+data/models/painting-response';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListRowComponent, ListHeaderComponent, NgFor],
  template: `
    <div class="list">
      <app-list-header></app-list-header>
      <app-list-row [row]="row" *ngFor="let row of rows()"></app-list-row>
    </div>
  `,
  styleUrl: './list.component.scss',
})
export class ListComponent {
  rows = input.required<Painting[] | undefined>();
}
