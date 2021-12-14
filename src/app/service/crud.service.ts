import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';
import {User} from './User';



@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  API: string='http://localhost/worldfit/';  //API de php CRUD

  public static val:any;
  constructor(private clienteHttp:HttpClient) {  }
  
  val = "";
  agregarEvento(datosEvent:Event):Observable<any>{
     return this.clienteHttp.post(this.API+"?insertar=1",datosEvent);
  }

  getEvent(){
    return this.clienteHttp.get(this.API);
  }

  DeleteEvent(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
 }
   
  GetOnlyEvent(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  EditEvent(id:any, datosEvent:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEvent);
  }

  //*******************************************************************
  getUser(){
    return this.clienteHttp.get(this.API+"?Usuarios");
  }
  GetOnlyUser(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultaruser="+id);
    }

    GetStatistics(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultarestadisticas="+id);
      }


 subirarchivo(archivo: {}){
  return this.clienteHttp.post(this.API+"?SavePicture", JSON.stringify(archivo));
 }

 getMembership(){
  return this.clienteHttp.get(this.API+"?Membresia");
 }

 
 
/* SetValue(Value_:any){
  console.log("El valor que llego es "+Value_)
    this.value = Value_;
}

Getvalue():any{
  console.log("El valor que se envia es "+this.value)
  return this.value;
} */

}

