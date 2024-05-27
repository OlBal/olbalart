import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <div
      class="mx-auto w-full mx-1 my-0 sm:p-6 md:p-8 flex align-center justify-center"
    >
      <main class="w-full ">
        <ng-content></ng-content>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
