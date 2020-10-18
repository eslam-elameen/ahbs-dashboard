import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'AHBS';
constructor(private router:Router){

}
  public selected = 'Inbox';
  public expanded = true;
  public items = [
      { text: 'add-employee', icon: 'k-i-inbox', selected: true,path:'add-employee' },
      { text: 'search-employee', icon: 'k-i-inbox', selected: false,path:'search-employee' },
  ];
  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }

 date = new Date()
  // console.log(date.toDateString());
 
  


}
