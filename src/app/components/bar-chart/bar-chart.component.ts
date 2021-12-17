import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  
  constructor(public CRUDService_:CRUDService) {
  
   }

  
   //datos: string[] = [CRUDService.namedata];

  dataset:any;
  datasets = [4,6,2,8];
  
  
  ngOnInit(): void {
     // console.log(this.namedata);
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
 // barChartLabels: Label[] = ['Entrenamieto de Espalda', 'Workout', 'Suplementacion', 'Conferencia Nutricion'];
  barChartLabels: Label[] = CRUDService.namedata;
  barChartType: ChartType = 'doughnut'; //doughnut , pie, line, bar, bubble, scatter, 
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    //{ data: [1, 1, 0, 8], label: 'Evento Con Mas Reservaciones' }
      { data: this.datasets, label: 'NO. Reservaciones' }
  ];
  
}
