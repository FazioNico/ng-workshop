import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private _router: Router
  ) { }

  async logout(): Promise<void> {
    await localStorage.removeItem('ng-auth');
    this._router.navigate(['auth']);
  }
}
