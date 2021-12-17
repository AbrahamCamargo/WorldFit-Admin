import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  public reservaciones: any;
  public eventTitle:any;
  public currentEvent:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit(): void {

    this.CRUDService.getEventTitle().subscribe(respuesta=>{
      console.log(respuesta);
       this.eventTitle=respuesta;
     });
    this.CRUDService.getReservations().subscribe(respuesta=>{
      console.log(respuesta);
       this.reservaciones=respuesta;
     });


  }

  setEvent(event:any){
    this.currentEvent = event;
  }
}
