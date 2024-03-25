import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/pagListaVehiculos/pagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculo/PagVehiculoRegistro/PagVehiculoRegistro.component';

const routes: Routes = [
 
{
  path: "home",
  component: HomeComponent
},

{
  path: "vehiculos",
  component: PagListaVehiculosComponent
},

{
  path: "vehiculo/:codigo",
  component: PagVehiculoComponent
},

{
  path: "vehiculo",
  component: PagVehiculoRegistroComponent
},

{
  path: "",
  component: HomeComponent,
  pathMatch:"full"
},
{
  path: "**",
  component: PagNotFoundComponent,
  pathMatch:"full"
},





];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
