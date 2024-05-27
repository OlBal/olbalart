import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from 'src/libs/shared/components/menu/menu.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <app-header></app-header>
    <div
      class="mx-auto w-full mx-1 my-0 sm:p-6 md:p-8 flex align-center justify-center"
    >
      <main class="w-full ">
        <!-- @if(activeRoute === 'works'){ -->
        <app-menu />
        <!-- } -->

        <ng-content></ng-content>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  activeRoute = signal('');

  constructor(private route: ActivatedRouteSnapshot) {}

  ngOnInit() {
    console.log(this.route);

    // this.activeRoute.set(this.route);
  }
}
