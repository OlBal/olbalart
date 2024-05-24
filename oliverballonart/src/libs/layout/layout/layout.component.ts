import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
     <app-header></app-header>
      <ng-content [body]></ng-content>  
      <app-footer></app-footer>
  </div>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
