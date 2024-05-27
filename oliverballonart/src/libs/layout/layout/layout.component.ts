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
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RouterModule,
  ],
  providers: [],
  template: `
    <app-header></app-header>
    @if(activeRoute() === '/' || activeRoute() === 'works'){
    <app-menu />
    }

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
export class LayoutComponent implements OnInit {
  activeRoute = signal('');

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);

    this.activeRoute.set(this.router.url);
  }
}
