import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NavComponent } from 'src/libs/shared/components/nav/nav.component';

import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent, JsonPipe],
  styleUrls: ['header.component.scss'],
  template: `
    <div class="w-100 py-2 container">
      <app-nav>
        @if(work()){
        <ul class="flex flex-row ">
          <li>{{ work()?.title }},</li>
          <li class="ml-4">{{ work()?.height }}cm x {{ work()?.width }}cm,</li>
          <li class="ml-4">{{ work()?.medium }} on {{ work()?.surface }},</li>
          <li class="ml-4">{{ work()?.year }}</li>
        </ul>
        }
      </app-nav>
    </div>
  `,
})
export class HeaderComponent {
  work = inject(WorksStore).workHover;
}
