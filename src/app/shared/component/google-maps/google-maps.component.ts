import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent  {

  // apiLoaded: Observable<boolean>;
  title = 'project';
  // title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  // constructor(httpClient: HttpClient) {
  //   this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBCYhW_5AfTwkCf4idRzIwte-ea8wYLPbY', 'callback')
  //       .pipe(
  //         map(() => true),
  //         catchError(() => of(false)),
  //       );
  // }

}
