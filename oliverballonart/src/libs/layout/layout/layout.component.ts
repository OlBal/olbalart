import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  providers: [],
  template: `
    <app-header></app-header>

    <div class="mx-auto w-full p-3 my-0 flex align-center justify-center">
      <main class="w-full ">
        <ng-content></ng-content>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
