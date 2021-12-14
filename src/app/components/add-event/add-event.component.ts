import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CRUDService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  formEvent:FormGroup;

  constructor(
    public form:FormBuilder,
    private CRUDService:CRUDService, 
    private ruteador:Router
    ) { 
   
    this.formEvent = this.form.group({
      titulo:[""],
      descripcion:[""],
      datetime:[""],
      picture:[""]
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    //console.log("Me presionaste");
    //console.log(this.formEvent.value);
    this.CRUDService.agregarEvento(this.formEvent.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/list-event');
    });
    
  }


}
