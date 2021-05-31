import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';
import { ServceService } from '../servce.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {
  

  constructor(public service : ServceService) { }
  AllHotels:any
  baseURL= environment.baseURL
  public isCollapsed: boolean[] = []
  response :any;
  ngOnInit(): void {
    this.service.getAllHotels().subscribe((res: any)=>{this.response=res;

      
      },
      (erreur:any)=>{},
       ()=>
        {
          console.log("finished");
          this.AllHotels=this.response[0].Hotel
          
          console.log(this.AllHotels);
          
     
        } 
      
      );
    
  }

  selected:any
  objectFound:any
priceFound:any
radioChangeHandler(event:any,i:any){
  this.selected=event.target.value
this.objectFound=  this.AllHotels[i].offreAndPrice.find((element:any)=>element.offre==this.selected)
  this.priceFound=this.objectFound.price
  this.AllHotels[i].price=this.priceFound

}




}
