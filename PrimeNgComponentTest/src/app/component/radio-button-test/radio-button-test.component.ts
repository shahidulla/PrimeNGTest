import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-test',
  templateUrl: './radio-button-test.component.html',
  styleUrls: ['./radio-button-test.component.css']
})
export class RadioButtonTestComponent implements OnInit {
  model: any;
  val1: string;
  showodiv = true;
  constructor() { }

  ngOnInit() {
    this.model = [
      {name: 'New York', code: 'NY', isDisabled: false},
      {name: 'Rome', code: 'RM', isDisabled: true},
      {name: 'London', code: 'LDN', isDisabled: false},
      {name: 'Istanbul', code: 'IST', isDisabled: false},
      {name: 'Paris', code: 'PRS', isDisabled: true}
    ];
  }

  checkModelValue() {
    this.showodiv = false;
    this.model[4].isDisabled = false;
    console.log(this.model);
  }

}
