import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NaviComponent} from './components/navi/navi.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaviComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MtkcFinanceAngular';

}
