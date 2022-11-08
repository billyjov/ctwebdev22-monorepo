import { Component } from '@angular/core';

import { lib3web } from '@ctweb-integrated/lib3web';

@Component({
  selector: 'ctweb-integrated-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  constructor() {
    lib3web();
  }
}
