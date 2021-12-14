import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit {
  total:any;
  membresias:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit(): void {
    this.CRUDService.getMembership().subscribe(respuesta=>{
     //console.log(respuesta);
      this.membresias=respuesta;
      this.total = this.membresias.length;
      console.log(this.total);

    });

    /* this.CRUDService.getTotalMemberships().subscribe(respuesta=>{
      console.log(respuesta);
      this.total = respuesta;
    }); */
  }

  /* myFunction1(){

    console.log(this.CRUDService.val);
   } */

}
