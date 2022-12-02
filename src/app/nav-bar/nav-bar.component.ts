import { Component, Input } from '@angular/core';
import { product } from 'src/models/product';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 // @Input() navbarData : product[]; //from parent to child event 

  constructor(){
  //  this.navbarData=[]
  }
  ngOnInit(): void {
  }
}
