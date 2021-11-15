import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverComponent } from './driver/driver.component';
import { HorseComponent } from './horse/horse.component';
import { IncabComponent } from './incab/incab.component';
import { ProofComponent } from './proof/proof.component';
import { RegisterComponent } from './register/register.component';
import { TrailerComponent } from './trailer/trailer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'driver',component:DriverComponent},
  {path:'horse',component:HorseComponent},
  {path:'incab',component:IncabComponent},
  {path:'proof',component:ProofComponent},
  {path:'register',component:RegisterComponent},
  {path:'trailer',component:TrailerComponent},
  {path:'vehicle',component:VehiclesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
