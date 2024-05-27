import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListHeader } from '../../models/list-header.model';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [NgFor],
  template: ` <ul class="w-full headings">
    <li *ngFor="let heading of headers">
      <h6>{{ heading.title }}</h6>
    </li>
  </ul>`,
  styleUrl: './list-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeaderComponent {
  headers: ListHeader[] = [
    { title: 'Title', sortable: false },
    { title: 'Year', sortable: true },
    { title: 'Medium', sortable: true },
    { title: 'Surface', sortable: true },
    { title: 'Available', sortable: true },
  ];
}
