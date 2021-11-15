import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:53923/";
  readonly ImageUrl="http://localhost:53923/Images";

  constructor( private http:HttpClient) { }

  getDriver():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/DriverInformation');
  }

  addDriver(val:any){
    return this.http.post(this.APIUrl+'/DriverInformation',val);
  }

  updateDriver(val:any){
    return this.http.put(this.APIUrl+'/DriverInformation',val);
  }

  deleteDriver(val:any){
    return this.http.delete(this.APIUrl+'/DriverInformation/',val)
  }

  // make Supervisor

  getSuperVisor():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/SuperVisor');
  }

  addSuperVisor(val:any){
    return this.http.post(this.APIUrl+'/SuperVisor',val);
  }

  updateSuperVisor(val:any){
    return this.http.put(this.APIUrl+'/SuperVisor',val);
  }

  deleteSuperVisor(val:any){
    return this.http.delete(this.APIUrl+'/SuperVisor/',val)
  }

  UploadImage(val:any){
    return this.http.post(this.APIUrl+'/Images/SaveFile',val);
  }

  getAllDriverInformation():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/DriverInformation/GetAllDriverInfo');
  }

  getAllSuperVisorInformation():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/SuperVisor/GetSuperVisorInfo');
  }

}
