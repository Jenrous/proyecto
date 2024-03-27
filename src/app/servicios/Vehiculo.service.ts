import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrL = "https://epico.gob.ec/vehiculo/public/api/vehiculos/";

  httpOptions= {
    // headers: new HttpHeaders ({'Content-Type': 'application/json'})
  };


  getVehiculos() {
    return this.http.get<Respuesta>(this.baseUrL+"vehiculos/").pipe (
      map(respuesta => {
        let lista: Array<Vehiculo> =[];
        respuesta.data.forEach((element: { codigo: any; marca: any; modelo: any; }) => {
          lista.push({codigo: element.codigo, marca: element.marca, modelo: element.modelo});
        });
        return respuesta.data
      })
    )
  }
insertVehiculo (vehiculo: Vehiculo){
 

  return this.http.post<Respuesta>(this.baseUrL+"vehiculo/",vehiculo );

}


getvehiculo(codigo: string){
  return this.http.get<Respuesta>(this.baseUrL+"vehiculo/"+ codigo);
}
actualizarVehiculo (vehiculo:Vehiculo, codigo: string){
  return this.http.put<Respuesta>(this.baseUrL+"vehiculo/"+ codigo, vehiculo, this.httpOptions);
}

eliminarVehiculo (codigo:string){
  return this.http.delete<Respuesta>(this.baseUrL+"vehiculo/"+ codigo);
}







  // getVehiculos(filtro: any): Observable<Array<Vehiculo>> {
  //   const escucha: Observable<Array<Vehiculo>> | undefined = new Observable(escuchando => {
  //     let lista = this.ListaVehiculos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()))
  //     escuchando.next(lista);
  //   });
  //   return escucha;
  // }

  
    // const dato: Observable <Vehiculo> = new Observable (consulta =>{
    //   setTimeout(()=>{
    //     let vehiculo= this.ListaVehiculos.find(element => element.codigo===codigo);
    //     consulta.next(vehiculo);
    //   }, 1000);
    // });
    // return dato;
    // let vehiculo = this.ListaVehiculos.find(ele => ele.codigo === codigo);
    // return vehiculo;

  

  addvehiculo(vehiculo: Vehiculo) {
    this.ListaVehiculos.push(vehiculo);
  }



  private ListaVehiculos: Array<Vehiculo> = [
    { "codigo": "A001", "marca": "CHEVROLET", "modelo": "ONIX-6", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": null, "anio": 2024, "calificacion": 3 },
    { "codigo": "A002", "marca": "KIA", "modelo": "RIO-2", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": null, "anio": 2024, "calificacion": 4 },
    { "codigo": "A003", "marca": "CHERRY", "modelo": "ARRIZO", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": "https://cdn.wheel-size.com/thumbs/29/65/2965cba9029ea238b9ab49354d33551a.jpg", "anio": 2024, "calificacion": 4 },
    { "codigo": "A004", "marca": "TOYOTA", "modelo": "AGYA", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": "https://www.shutterstock.com/image-photo/passenger-car-isolated-on-white-600nw-2288114495.jpg", "anio": 2024, "calificacion": 5 },
    { "codigo": "A0005", "marca": "HYUNDAY", "modelo": "ACCENT", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": "https://dealernew.com.ec/wp-content/uploads/2021/06/D_NQ_NP_656377-MEC43833916162_102020-O.jpg", "anio": 2024, "calificacion": 5 },
    { "codigo": "A0006", "marca": "HYUNDAY", "modelo": "ACCENT", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": "https://dealernew.com.ec/wp-content/uploads/2021/06/D_NQ_NP_656377-MEC43833916162_102020-O.jpg", "anio": 2024, "calificacion": 5 },
    { "codigo": "A0007", "marca": "HYUNDAY", "modelo": "ACCENT", "color": "AZUL", "kilometraje": 50000, "precio": 17000, "foto": "https://dealernew.com.ec/wp-content/uploads/2021/06/D_NQ_NP_656377-MEC43833916162_102020-O.jpg", "anio": 2024, "calificacion": 5 },
  ];
}



export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo>| Vehiculo|any;
}