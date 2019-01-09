import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-test',
  templateUrl: './radio-button-test.component.html',
  styleUrls: ['./radio-button-test.component.css']
})
export class RadioButtonTestComponent implements OnInit {
  model: any;
  val1: string;
  constructor() { }

  ngOnInit() {
    this.model = [
      {
        question: 'Whats your name',
        answer: [
          {
            name: 'momin'
          },
          {
          name: 'Jobbar'
          }
        ]
      },
      {
        question: 'Whats your name',
        answer: [
          {
            name: 'momin'
          },
          {
          name: 'Jobbar'
          }
        ]
      },

      {
        question: 'Whats your name',
        answer: [
          {
            name: 'momin'
          },
          {
          name: 'Jobbar'
          }
        ]
      },

      {
        question: 'Whats your name',
        answer: [
          {
            name: 'momin'
          },
          {
          name: 'Jobbar'
          }
        ]
      }
    ];
  }

  checkModelValue() {
  console.log(this.model);
  }

}
