import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CRUDService } from 'src/app/service/crud.service';
import{ Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  formEvent:FormGroup;
  id:any;
  DateWithFormat:String;
  DateWithoutFormat:String;
  NamePicture:any;
  archivo = {
    id: null as any,
    nombreArchivo: null,
    base64textString: null as any
    //descripcion2: null as any,
    //precio2: null as any,
  }
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CRUDService,
    public form:FormBuilder,
    private ruteador:Router
  ) {    
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.DateWithFormat = "";
    this.DateWithoutFormat = "";
    
    this.crudService.GetOnlyEvent(this.id).subscribe(respuesta =>
      {
        
        //We save the value of the date in a variable 
        this.DateWithoutFormat = respuesta[0]['DateTime']; //Format 2021-11-23 19:29:00
        //The function it´s called 
        this.DateWithFormat = this.ToFormat(this.DateWithoutFormat);

        this.formEvent.setValue({
          titulo:respuesta[0]['Title'],
          descripcion:respuesta[0]['Description'],
          datetime: this.DateWithFormat
        });

      });

      

      this.formEvent = this.form.group({
        titulo:[""],
        descripcion:[""],
        datetime:[""]
        //picture:[""]
      })

  }
  /*The function separates the date and time from their original format 
    and joins them with a letter "T" in between so that it is accepted 
    or understood by the input of the datetime-local type*/
  private ToFormat(date: String): String {
    let cad1 = date.slice(0,10);    //Variable containing the date (2021-11-23)
    let cad2 = date.slice(11,16);   //Variable containing the time (15:29:00)
    let ValueSend = cad1+"T"+cad2;  //Union of the variables plus the letter "T" in the middle (2021-11-23 + T + 19:29:00)
    return ValueSend;               //Result 2021-11-23T19:29:00
  }

  ngOnInit(): void {
  }

  enviarDatos():any{

    //console.log(this.formEvent.value);
     this.upload();
    // console.log(this.id);
   // console.log(this.formEvent.value);
    this.crudService.EditEvent(this.id, this.formEvent.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/list-event');
    }); 
  }

  //****************************************************************************************** */


  subirarchivo(event: any){
    var files = event.target.files;
    var file = files[0];
    //console.log(file.name);
    this.archivo.nombreArchivo = file.name;
    this.archivo.id = this.id;

    if(files && file){
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvent: any){
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload(){

    this.crudService.subirarchivo(this.archivo).subscribe(
      datos =>{
        //console.log(this.archivo);

      }
    );
  }

}
