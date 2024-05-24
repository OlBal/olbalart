import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/libs/components/nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
  <div class="w-100">
    <app-nav></app-nav>
  </div>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
