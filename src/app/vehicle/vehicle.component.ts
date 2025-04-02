import { Component } from '@angular/core';
import { VehicleService } from "../vehicle.service";


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
  vechiles:any=[];    
  vehicles: any;
constructor(private _vehicleService:VehicleService){
  _vehicleService.getVechiles().subscribe(
 (data:any)=>{
   console.log(data);
   this.vechiles=data;
 },(err:any)=>{
   alert()
 }
)
}

//--------------------Filter----------------------------------//

filter(){
this._vehicleService.getFilteredVehicles(this.term).subscribe(
 (data:any)=>{
   console.log(data);
   this.vechiles=data;
 },(err:any)=>{
   alert('Internal server error')
 }
)
}

//---------------------------Sort----------------------------------------------//
column:string='';
order:string='';

sort(){
this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
 (data:any)=>{
   console.log(data);
   this.vehicles=data;
 },(err:any)=>{
   alert('Internal server error')
 }
)
}

//------------------------------------------delete----------------------------------------//

loadVehicles(){
this._vehicleService.getVechiles().subscribe(
 (data:any)=>{
   console.log(data);
   this.vechiles=data;
   console.log(this.vechiles);
 },(err:any)=>{
   alert('internal server error')
 }
)
}

delete(id:any){
if(confirm('Are yo sure you want to delete')==true){
this._vehicleService.deletVehilce(id).subscribe(
 (data:any)=>{
   alert('Record deleted succeessfully');
   this.loadVehicles();
 },(err:any)=>{
   alert('Internal server error');
 }
)
}else{
alert('You have cancelled')
}
}

limit:string='';
page:string='';
pagination(){
this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
 (data:any)=>{
   console.log(data);
   this.vechiles=data;
 },(err:any)=>{
   alert('Internal server error')
 }
)
}

}
