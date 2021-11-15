import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-vehicles',
  templateUrl: './show-vehicles.component.html',
  styleUrls: ['./show-vehicles.component.css']
})
export class ShowVehiclesComponent implements OnInit {

  constructor( private service:SharedService) { }

  VehicleInfo:any=[];

  ModalTitle:string;
  ActivateAddEditVehiclesComp:boolean=false;
  Driver:any;

  ngOnInit(): void {
    this.refreshVehicleInfo();
  }

  addClick(){
    this.VehicleInfo{
      VehicleCount:0,
      VehicleRegistration:"",
      VehihcleMileage:"",
      FleetNumber:""        
    }
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehiclesComp=true

  }

  editClick(item){
    this.VehicleInfo=item;
    this.ModalTitle="Edit Vehicle";
    this.ActivateAddEditVehiclesComp=true;

  }

  deleteClick(item){
    if(confirm('Are you sure?')(
      this.service.deleteTruck(item.VehicleRegistration).subscribe(data=>(
        alert(data.tostring());
        this.refreshVehicleInfo();
      ))
    ))
  }

  closeClick(){
    this.ActivateAddEditVehiclesComp=false;
    this.refreshVehicleInfo();
  }

  refreshVehicleInfo(){
    this.service.getAllTruckInfo().subscribe(data=>{
      this.VehicleInfo=data;
    })
  }

}
