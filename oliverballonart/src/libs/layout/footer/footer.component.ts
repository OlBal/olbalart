import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <footer class="bg-white relative sticky ">
    <p class="footer__text">
      Copyright {{ date | date : 'yyyy' }} Oliver Ballon 𓇢𓆸
    </p>
  </footer>`,
})
export class FooterComponent {
  date = new Date();
}
