import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <menu class="flex justify-start mx-2">
      <li>
        <button class="h5 " (click)="toggleView()">
          {{ view ? 'Grid' : 'List' }}
        </button>
      </li>
    </menu>
  `,
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  view = false;

  toggleView() {
    this.view = !this.view;
  }
}
