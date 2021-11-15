import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-driver',
  templateUrl: './show-driver.component.html',
  styleUrls: ['./show-driver.component.css']
})
export class ShowDriverComponent implements OnInit {

  constructor( private service:SharedService) { }

  DriverInfo:any=[];

  ModalTitle:string;
  ActivateAddEditDriverComp:boolean=false;
  Driver:any;

  ngOnInit(): void {
    this.refreshDriverInfo();
  }

  addClick(){
    this.Driver{
      DriverCount:0,
      Driver:"",
      DriverSurname:"",
      DriverID:"",
      CompanyID:"",
      Gender:"",
      Password:"",
      Username:"",
      DriverImage:""         
    }
    this.ModalTitle="Add Driver";
    this.ActivateAddEditDriverComp=true

  }

  editClick(item){
    this.Driver=item;
    this.ModalTitle="Edit Driver";
    this.ActivateAddEditDriverComp=true;

  }

  deleteClick(item){
    if(confirm('Are you sure?')(
      this.service.deleteDriver(item.DriverID).subscribe(data=>(
        alert(data.tostring());
        this.refreshDriverInfo();
      ))
    ))
  }

  closeClick(){
    this.ActivateAddEditDriverComp=false;
    this.refreshDriverInfo();
  }

  refreshDriverInfo(){
    this.service.getAllDriverInformation().subscribe(data=>{
      this.DriverInfo=data;
    })
  }

}
