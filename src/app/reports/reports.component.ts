import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Number of donations at a particular Month.'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Date',
        data: [187, 51, 176, 78, 115, 99, 53, 94, 146, 62,
          152, 189, 176, 77, 142, 199, 70, 111, 123, 80,
          131, 172, 98, 103, 159, 63, 186, 115, 66, 51]
      } as any
    ]
  });



  pieChart = new Chart({
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Donors categorized on their BLOOD-GROUP',
    },
    legend: {
      enabled: true, // You can set it to false to hide the legend
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'A-POSITIVE', y: 2, color: '#FF5733' },    // Red
          { name: 'A-NEGATIVE', y: 15, color: '#3D9970' },   // Green
          { name: 'AB-POSITIVE', y: 2, color: '#FF851B' },   // Orange
          { name: 'AB-NEGATIVE', y: 15, color: '#0074D9' },  // Blue
          { name: 'B-POSITIVE', y: 2, color: '#FFDC00' },    // Yellow
          { name: 'B-NEGATIVE', y: 15, color: '#FF4136' },   // Bright Red
          { name: 'O-POSITIVE', y: 2, color: '#B10DC9' },    // Purple
          { name: 'O-NEGATIVE', y: 15, color: '#85144b' },   // Dark Purple
        ],
      } as any
    ],
  });


  pieChartGender = new Chart({
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Donors categorized on their GENDER',
    },
    legend: {
      enabled: true, // You can set it to false to hide the legend
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'MALE', y: 30, color: '#FF5733' },    // Red
          { name: 'FEMALE', y: 15, color: '#3D9970' },   // Green
          { name: 'OTHER', y: 1, color: '#0074D9' },  // Blue
          
          
        ],
      } as any
    ],
  });
}
