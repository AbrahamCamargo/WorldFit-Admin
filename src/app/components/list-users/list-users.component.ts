import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  Usuarios:any;

  constructor(private CRUDService:CRUDService) { }

  ngOnInit(): void {
    this.CRUDService.getUser().subscribe(respuesta=>{
     // console.log(respuesta);
      this.Usuarios=respuesta;
    });
  }
}
