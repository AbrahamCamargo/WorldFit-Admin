import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor:any;
  namedata:any;
  constructor(private CRUDService:CRUDService) { 
    
  }

  ngOnInit(): void {
   this.getdatatitle();
  }

  myFunc(){
    this.valor = "Hola mundo desde home xD..............";
    this.CRUDService.val = this.valor;
  }
 

  getdatatitle(){
    this.CRUDService.getEventTitle().subscribe(respuesta=>{
      this.namedata = respuesta;
      for ( let item of this.namedata) {
        CRUDService.namedata.push(item.Title);
       }


       
       //console.log( CRUDService.namedata.length);
    });
  }


}
