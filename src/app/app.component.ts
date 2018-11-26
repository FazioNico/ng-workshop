import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  item = null;
  title = 'BikeStore';
  user: {email:string, password: string};

  ngOnInit() {
    this.checkUser();
  }

  checkUser() {
    const { user = null} = JSON.parse(localStorage.getItem('ng-auth') || '{}');
    if (!user) return;
    this.user = user;   
  }

  onSelected($event) {
    console.log($event);
    this.item = $event;
  }

}
