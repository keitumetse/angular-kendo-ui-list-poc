import { Component } from '@angular/core';
import { watchListItems } from './watchlist';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public watchListItems: any[] = watchListItems;
}
