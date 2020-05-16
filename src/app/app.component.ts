import { Component } from '@angular/core';
import { NgxMetrikaService } from '@kolkov/ngx-metrika';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-troyka';

  constructor(private ym: NgxMetrikaService) {}
}
