import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit(): void {
  }

  myFunc(){
    this.valor = "Hola mundo desde home xD..............";
    this.CRUDService.val = this.valor;
    
  }
}
