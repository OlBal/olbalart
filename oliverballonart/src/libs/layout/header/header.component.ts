import { Component, inject } from '@angular/core';
import { NavComponent } from 'src/libs/shared/components/nav/nav.component';

import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  styleUrls: ['header.component.scss'],
  template: `
    <div class="w-full h-auto header-container relative sticky">
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
