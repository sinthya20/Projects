import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Cards } from '../models/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  records:Cards[]=[];
  constructor(private service:CardsService,private router:Router){}
  ngOnInit():void{
    this.service.getdetails().subscribe(data=>this.records=data);
  }
  cardsdetails(id:number | undefined){
    this.router.navigate(['/card',id])

  }

}
