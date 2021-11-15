import { Component, Input, OnInit } from '@angular/core';
import * as internal from 'stream';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-vehicles',
  templateUrl: './add-edit-vehicles.component.html',
  styleUrls: ['./add-edit-vehicles.component.css']
})
export class AddEditVehiclesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() vehicles:any;
  VehicleCount:string;
      VehicleMileage:string;
      FleetNumber:string;
      DriverID:string;
      CompanyID:string;
      

  ngOnInit(): void {
    this.CompanyID=this.vehicles.CompanyID;
    this.VehicleMileage=this.vehicles.VehicleMileage;
    this.VehicleCount=this.vehicles.VehicleCount;
    this.FleetNumber=this.vehicles.FleetNumber;
  }

  addTruck(){
    var val = {VehicleCount:this.VehicleCount,
      vehicles:this.vehicles,
      VehicleMileage:this.VehicleMileage,
      FleetNumber:this.FleetNumber,
      };
    
    this.service.addTruck(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTruck(){
    var val = {VehicleCount:this.VehicleCount,
      vehicles:this.vehicles,
      VehicleMileage:this.VehicleMileage,
      FleetNumber:this.FleetNumber,
      };
    
    this.service.updateTruck(val).subscribe(res=>{
      alert(res.toString());
    });

  }


}
