import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <button class="h5" (click)="toggleView()">
      {{ view ? 'List' : 'Grid' }}
    </button>
  `,
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  view? = signal(false);

  toggleView() {
    this.view?.set(!this.view);
  }
}
