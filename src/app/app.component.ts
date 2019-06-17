import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slackjaw';
  color = 'green';

handler = (port: chrome.runtime.Port) => {
  port;
}

}
