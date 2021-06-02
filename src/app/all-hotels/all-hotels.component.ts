import { Component, OnInit } from '@angular/core';
import { Document } from 'mongoose';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';
import { ServceService } from '../servce.service';
import { Hotel } from '../hotel.Binding'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {
  [x: string]: any;

AllHotels:any=[]
searchValue: string ='';
  constructor(public service : ServceService, private httpClient:HttpClient) { }

  baseURL= environment.baseURL
  public isCollapsed: boolean[] = []
  response :any;

  filter_array:any
  tab:any;
  ngOnInit(): void {
    this.service.getAllHotels().subscribe((res: any)=>{
      this.response=res;
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
searchInput:any
// radioChangeHandler(event:any,i:any){
//   this.selected=event.target.value
// this.objectFound=  this.AllHotels[i].rooms[0].room[0].Boardings[0].Boarding[0].cancellationPolicy[0].Fee.find((element:any)=>element.Fee==this.selected)
//   this.priceFound=this.objectFound.Fee
//   this.AllHotels[i].Fee=this.priceFound

// }
selectedItem: string = '';

//event handler for the select element's change event
selectChangeHandler (event: any,i:any) {
  //update the ui
  this.selectedItem = event.target.value;
  console.log(event.target.value);
}


findByName(){
  this.searchInput = document.getElementById("searchInput");
console.log(this.searchInput.value);
  this.filter_array=this.AllHotels.find((hotel:any)=> hotel.Title[0] == this.searchInput.value)
console.log(this.filter_array);
this.AllHotels.splice(0,this.AllHotels.length);
this.AllHotels=this.filter_array;
console.log(this.AllHotels);
 location.reload()
}
}

