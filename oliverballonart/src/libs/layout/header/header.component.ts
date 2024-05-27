import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/libs/shared/components/nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <div class="w-100 py-2">
      <app-nav>
        <p>{{ hoverText }}</p>
      </app-nav>
    </div>
  `,
})
export class HeaderComponent {
  @Input() hoverText = '';
}
