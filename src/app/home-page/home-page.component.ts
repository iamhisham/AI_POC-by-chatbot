import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ApexNonAxisChartSeries, ApexPlotOptions, ApexChart, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  chartOptions: any;
  series: ApexNonAxisChartSeries = [];

  itemVisible = false;
  isEditMode: boolean = false;
  isMaximized: boolean = false;

  constructor(private popoverController: PopoverController) {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
  }

  ngOnInit() { }


  getChartData(value: number, userCount: number, label: string, color: string) {
    return {
      colors: '#FF5733',
      series: 75,
      chart: {
        height: 250,
        type: 'radialBar'
      },
      tooltip: {
        enabled: true,
        custom: function () {
          return '<div>' +
            '<span>' + 'Sample Label' + ' : ' + 30 + '</span>' +
            '</div>'
        },
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => seriesName,
          },
        },
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%'
          }
        }
      },
      labels: 'Sample Label',
      legend: {
        show: false
      }
    }
  }

  restoreDownPopover() {
    this.isMaximized = false;
    this.applyPopoverStyles({});
  }

  maximizePopover() {
    this.isMaximized = true;
    this.applyPopoverStyles({
      width: '100%',
      height: '100%',
      top: '0%',
      left: '0%',
    });
  }

  closePopover() {
    this.popoverController.dismiss();
  }

  applyPopoverStyles(styles: any) {
    const popoverElement = document.querySelector('.chatbot-popover') as HTMLElement;
    if (popoverElement) {
      Object.assign(popoverElement.style, styles);
    }
  }
}

