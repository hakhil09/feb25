import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup=new FormGroup({

    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),

  })

  id:number=0;
product: any;
  constructor(private _vehicleService:VehicleService,
    private _router:Router,
    private _activateRoute:ActivatedRoute){
      _activateRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
        },(err:any)=>{
          alert('Internal Server Error')
        }
      )

      if(this.id){
        _vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.vehicleForm.patchValue(data);
          },(err:any)=>{
            alert('Internal server error')
          }
        )
      }
    }
  create(){

    if(this.id){

      console.log(this.vehicleForm.value);
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert('Vehicle Record Updated Successfully!');
          this._router.navigateByUrl("/dashboard/vehicle");
        },(err:any)=>{
          alert('Internal server error')
        }
      )

    }else{

      console.log(this.vehicleForm.value);
    this._vehicleService.getVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Vehicle Created Successfully");
        this._router.navigateByUrl("/dashboard/vechile");
      },(err:any)=>{
        alert("Internal server Error")
      }
    )

    }
  
  }

}
