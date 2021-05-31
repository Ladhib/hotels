import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServceService {
  baseURL= environment.baseURL

  constructor(public http:HttpClient) { }


  addHotel(data : any)
  {
    return this.http.post( this.baseURL + '/users/addHotel',data)
  }


  getAllHotels(){
    return this.http.get(this.baseURL +'/users/hotels')
  }


}
