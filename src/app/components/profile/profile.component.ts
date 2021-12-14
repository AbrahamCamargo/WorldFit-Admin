import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CRUDService } from 'src/app/service/crud.service';
import{ Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile:FormGroup;
  formEstadisticas:FormGroup;
  id:any;
  CompletName:any;
  age:any;

  constructor(
     private activeRoute:ActivatedRoute,
    private crudService:CRUDService,
    public form:FormBuilder,
    private ruteador:Router
    ) {
      this.id=this.activeRoute.snapshot.paramMap.get('id');
      //console.log(this.id);
      this.crudService.GetOnlyUser(this.id).subscribe(respuesta =>
        {
          
          //console.log(respuesta);
          
          this.formProfile.setValue({
            FirstName:respuesta[0]['FirstName'],
            LastName:respuesta[0]['LastName'],
            BirthDate:respuesta[0]['BirthDate'],
            Gender:respuesta[0]['Gender'],
            Phone:respuesta[0]['Phone'],
            User:respuesta[0]['User'],
            Email:respuesta[0]['Email'],
            RegistrationDate:respuesta[0]['RegistrationDate']
          });
            this.age = "";
            this.age = this.calculateAge(respuesta[0]['BirthDate']);
            this.CompletName = "";
            this.CompletName =respuesta[0]['FirstName'] + " "+ respuesta[0]['LastName'];
        });

        this.crudService.GetStatistics(this.id).subscribe(respuesta =>
          { 

            //console.log(respuesta); Height: '173', Weight: '76', IMC: '25', BF: '18%', id_user: '1'
            this.formEstadisticas.setValue({ 
              Height:respuesta[0]['Height']+ " CM",
              Weight:respuesta[0]['Weight'] + " KG",
              IMC:respuesta[0]['IMC'],
              BF:respuesta[0]['BF'],
              Age: this.age
            });

          });

          this.formEstadisticas = this.form.group({
              Height:[""],
              Weight:[""],
              IMC:[""],
              BF:[""],
              Age:[""]

          })
  
        this.formProfile = this.form.group({
          FirstName:[""],
          LastName:[""],
          BirthDate:[""],
          Gender:[""],
          Phone:[""],
          User:[""],
          Email:[""],
          RegistrationDate:[""]
        })

     }

  ngOnInit(): void {
  }
    calculateAge(birthday:any):any {
    var birthday_arr = birthday.split("-");
    console.log(birthday_arr);
    var birthday_date = new Date(birthday_arr[0], birthday_arr[1] - 1, birthday_arr[2]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  
}
