import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {




  formulario: FormGroup;
  vehiculo: Vehiculo | undefined;
  listaVehiculos: any;
  constructor(private activatedRoute: ActivatedRoute,

    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {


    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": ['', [Validators.required]]
    });


  }

  ngOnInit() {
    
    }
  
  guardar() {
    if (this.formulario.valid) {
      this.vehiculoServicio.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta => {
          if(respuesta.codigo == '1'){
            Swal.fire({
              title: "The Internet?",
              text: "Su vehículo fue grabado con éxito",
              icon: "success"
            }).then (res =>{
              this.formulario.reset();
            });
          }else {
            Swal.fire({
              title: "Mensaje",
              text: "No se puede registrar el vehículo:" + respuesta.mensaje,
              icon: "error"
            });
          }
        }
      );
    }else{
      Swal.fire({
        title: "Mensaje",
        text: "Faltan campos por llenar",
        icon: "error"

      });
    }

    //  let vehiculo: Vehiculo= (...this.formulario.value);
    //   this.vehiculoServicio.addvehiculo(vehiculo);
    // console.log('formulario', this.formulario);
    // if (this.formulario.valid) {
    //   alert('grabado con exito');
    // } else {
    //   alert('te faltan campos por llenar.');
    // }


  }
}
export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codigoV.test(value)) {
      return null;
    }
    return { 'codigoValidate': true };
  }

}