import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { WorksStore } from 'src/libs/shared/+data/stores/works.store';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    JsonPipe,
  ],
  providers: [],
  template: `
    <app-header></app-header>

    <div class="mx-auto w-full p-3 my-0 flex align-center justify-center">
      <main class="w-90">
        <ng-content></ng-content>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  work = inject(WorksStore).WorkOnHover;
}
