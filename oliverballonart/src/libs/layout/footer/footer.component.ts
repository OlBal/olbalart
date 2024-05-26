import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: ` <footer class="bg-white ">
    <p class="footer__text">
      Copyright {{ date | date : 'yyyy' }} Oliver Ballon 𓇢𓆸
    </p>
  </footer>`,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  date = new Date();
}
