import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';

import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: '<router-outlet/>'

})
export class AppComponent {
  title = 'portfolio2';
  constructor(private router: Router) {}


ngOnInit(): void {
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }
  });
}
}

