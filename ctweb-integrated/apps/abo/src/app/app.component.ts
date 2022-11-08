import { Component } from '@angular/core';
import { helper } from '@ctweb-integrated/lib2a';

@Component({
  selector: 'ctweb-integrated-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'abo';

  constructor() {
    helper()
  }
}
