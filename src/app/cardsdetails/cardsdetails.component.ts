import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardsdetails',
  templateUrl: './cardsdetails.component.html',
  styleUrls: ['./cardsdetails.component.css']
})
export class CardsdetailsComponent {
  card:any
  constructor(private service:CardsService,private route:ActivatedRoute){}
  ngOnInit():void{
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.service.getdetails().subscribe(data=>{this.card=data.find(c=>c.id ===id)})
  }
  

}
