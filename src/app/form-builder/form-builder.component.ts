import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit, OnChanges {
  @Input() schema: any;
  properties: string[] = [];
  output: any;

  constructor() {
  }

  ngOnInit() {
    console.log('form', this.schema);
    this.properties = Object.keys(this.schema.properties);
  }

  ngOnChanges(changes: any) {
    console.log(changes);
  }


  submit(form: NgForm) {
    this.output = JSON.stringify(form.value);
    console.log(form.value, form);
  }

}
