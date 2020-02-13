import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mb-cloud-ui';
  constructor( public router: Router) {}
  isActive(route: string) {
    return route === window.location.pathname;
  }
  resolveRoute( route: string) {
    this.router.navigateByUrl(route);
  }
}
