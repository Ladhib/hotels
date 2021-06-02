import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value:any,searchValue:string) {
    if (value.length===0){
  return value;
}
const hotels =[];
for(const hotel of value){
  if (hotel['name']===searchValue){
    hotels.push(hotel);
  }
}
return hotels;
}

}
