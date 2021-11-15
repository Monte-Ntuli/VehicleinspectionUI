import { Component, Input, OnInit } from '@angular/core';
import * as internal from 'stream';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.css']
})
export class AddEditDriverComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() Driver:any;
  DriverCount:string;
      Driver:string;
      DriverSurname:string;
      DriverID:string;
      CompanyID:string;
      Gender:string;
      Password:string;
      Username:string;
      DriverImage:string; 


  ngOnInit(): void {
    this.CompanyID=this.Driver.CompanyID;
    this.Driver=this.Driver.Driver;
    this.DriverCount=this.Driver.DriverCount;
    this.DriverSurname=this.Driver.DriverSurname;
    this.Gender=this.Driver.Gender;
    this.Password=this.Driver.Password;
    this.DriverImage=this.Driver.DriverImage;
  }

  addDriver(){
    var val = {DriverCount:this.DriverCount,
      Driver:this.Driver,
      DriverSurname:this.DriverSurname,
      DriverID:this.DriverID,
      Gender:this.Gender,
      Password:this.Password,
      Username:this.Username};
    
    this.service.addDriver(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDriver(){
    var val = {DriverCount:this.DriverCount,
      Driver:this.Driver,
      DriverSurname:this.DriverSurname,
      DriverID:this.DriverID,
      Gender:this.Gender,
      Password:this.Password,
      Username:this.Username};
    
    this.service.updateDriver(val).subscribe(res=>{
      alert(res.toString());
    });

  }
 
}
