import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ShowRegisterComponent } from './register/show-register/show-register.component';
import { DriverComponent } from './driver/driver.component';
import { ShowDriverComponent } from './driver/show-driver/show-driver.component';
import { AddEditDriverComponent } from './driver/add-edit-driver/add-edit-driver.component';
import { AddEditRegisterComponent } from './register/add-edit-register/add-edit-register.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ShowVehiclesComponent } from './vehicles/show-vehicles/show-vehicles.component';
import { AddEditVehiclesComponent } from './vehicles/add-edit-vehicles/add-edit-vehicles.component';
import { HorseComponent } from './horse/horse.component';
import { ShowHorseComponent } from './horse/show-horse/show-horse.component';
import { TrailerComponent } from './trailer/trailer.component';
import { AddEditHorseComponent } from './horse/add-edit-horse/add-edit-horse.component';
import { ShowTrailerComponent } from './trailer/show-trailer/show-trailer.component';
import { AddEditTrailerComponent } from './trailer/add-edit-trailer/add-edit-trailer.component';
import { IncabComponent } from './incab/incab.component';
import { ShowIncabComponent } from './incab/show-incab/show-incab.component';
import { AddEditIncabComponent } from './incab/add-edit-incab/add-edit-incab.component';
import { SharedService } from './shared.service';
import { ProofComponent } from './proof/proof.component';
import { AddEditProofComponent } from './proof/add-edit-proof/add-edit-proof.component';
import { ShowProofComponent } from './proof/show-proof/show-proof.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShowRegisterComponent,
    DriverComponent,
    ShowDriverComponent,
    AddEditDriverComponent,
    AddEditRegisterComponent,
    VehiclesComponent,
    ShowVehiclesComponent,
    AddEditVehiclesComponent,
    HorseComponent,
    ShowHorseComponent,
    TrailerComponent,
    AddEditHorseComponent,
    ShowTrailerComponent,
    AddEditTrailerComponent, 
    IncabComponent,
    ShowIncabComponent,
    AddEditIncabComponent,
    ShowProofComponent,
    AddEditProofComponent,
    ProofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
