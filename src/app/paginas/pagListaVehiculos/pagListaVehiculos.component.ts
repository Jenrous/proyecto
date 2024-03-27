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

  // Creo que este es el error, no me lleva a ningun lado
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
    title: "De verdad quiere eliminar su carrito?",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No"
  }).then ( (res)=> {
    if(res.isConfirmed){
      this.vehiculosService.eliminarVehiculo(codigo).subscribe(data =>{
        if(data.codigo == '1') {
          this.consultaVehiculos()
          Swal.fire({
            title: "mensaje",
            text: "Vehículo eliminado",
            icon: "success"
          });
        }
      }); {

      }
    }

  });
}

}



