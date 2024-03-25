import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./pagListaVehiculos/pagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtililitariosModule } from "../utilitarios/UtililatiosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculo/PagVehiculoRegistro/PagVehiculoRegistro.component";





@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        UtililitariosModule,
        RouterModule,
        ReactiveFormsModule
        
    ],
    declarations: [
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent
    ],
    exports: [
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent
    ]
})



export class paginaModule {

}