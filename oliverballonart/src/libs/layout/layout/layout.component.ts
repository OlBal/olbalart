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
    <main class="mx-auto w-full mt-8 p-3 flex align-center justify-center ">
      <ng-content></ng-content>
    </main>

    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
