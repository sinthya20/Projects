import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-sweetshop',
  templateUrl: './sweetshop.component.html',
  styleUrls: ['./sweetshop.component.css']
})
export class SweetshopComponent {
  details:Cards[]=[];
  constructor(private service:CardsService){}
  ngOnInit():void{
    this.sweetclick()
  }
  sweetclick(){
    this.service.getdetails().subscribe(data=>this.details=data)
  }
 
  
}
