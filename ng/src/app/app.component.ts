import { Component } from '@angular/core';

import { GonggooglechartspecificComponent } from 'gonggooglechartspecific'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng';

  view = 'Carto view' // the curent view
  carto = 'Carto view'
  data = 'Data view'
  diagrams = 'Diagrams view'
  views: string[] = [this.carto, this.data];
}
