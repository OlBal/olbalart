import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/libs/shared/components/nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <div class="w-100 py-2 mb-4">
      <app-nav></app-nav>
    </div>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
