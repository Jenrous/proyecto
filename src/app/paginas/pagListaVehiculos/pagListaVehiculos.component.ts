import { Component, Input, OnInit, input } from '@angular/core';
import { paginaModule } from '../paginaModule';
import { Respuesta, VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Data } from '@angular/router';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';

@Component({
  selector: 'app-pagListaVehiculos',
  templateUrl: './pagListaVehiculos.component.html',
  styleUrls: ['./pagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
mostrarImagen= true;
// filtro: string ="";
private _filtro: string="";
get filtro(){
  return this._filtro
}

set filtro(data:string){
  this._filtro= data;
  this.consultaVehiculos();
}


@Input() valor:string= '';
ListaVehiculos: Array<Vehiculo>| Vehiculo|any =[];


  constructor(
    private vehiculosService: VehiculoService,
   
  ) { 
    
  }

  

  ngOnInit() {
console.log('ingreso a ejecutarse');
this.consultaVehiculos()
// this.vehiculosService.getVehiculos().subscribe(respuesta =>{
//   console.log(respuesta);
//   this.ListaVehiculos= respuesta;
// })



    // this.consultaVehiculos();
  }

  mostrar() {
    this.mostrarImagen = !this.mostrarImagen
  }
  consultaVehiculos (){
    this.vehiculosService.getVehiculos().subscribe(respuesta =>{
      
        console.log(respuesta);
        this.ListaVehiculos= respuesta;
      })
    // this.vehiculosService.getVehiculos (this.filtro).subscribe(respuesta =>{
    //   if(respuesta.codigo ==='1'){
    //     this.ListaVehiculos = respuesta;
    //   }
      
    // });
  }

recepcion(dato:number){
  console.log('Dato:', dato);
  
}

eliminar(codigo:string){
  Swal.fire({
    title: "Do you want to save the changes?",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "NO"
  }).then ( (res)=> {
    if(res.isConfirmed){
      this.vehiculosService.eliminarVehiculo(codigo).subscribe(data =>{
        if(data.codigo == '1') {
          this.consultaVehiculos()
          Swal.fire({
            title: "mensaje",
            text: "vehiculo eliminado",
            icon: "success"
          });
        }
      }); {

      }
    }

  });
}

}



