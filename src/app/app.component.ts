import { Component } from '@angular/core';
import * as data from './schema.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-builder';
  schema: any;
  // editableSchema: string;
  constructor() {
    // console.log((data as any).default);
    this.schema = JSON.parse(JSON.stringify((data as any).default));
  }

  dataChange(event: any) {
    // const data: string = event.target.innerText;
    let formmatedData = event.target.innerText.replace(/(\r\n|\n|\r)/gm, '');
    formmatedData = formmatedData.replace(' ', '');
    this.schema = JSON.parse(formmatedData);
    console.log(this.schema);
  }
}
