import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';
import { AirfrieghtnewrequestComponent } from 'src/app/freight/component/airfrieghtnewrequest/airfrieghtnewrequest.component';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  latitude!: number;   
  longitude!: number; 
  @ViewChild('search')
  lat :any;
  lng:any;

  public searchElementRef!: ElementRef;
  constructor(  private mapsAPILoader: MapsAPILoader,private ngZone: NgZone){}

  ngOnInit(): void {
    
    this.mapsAPILoader.load().then(() => {
    });
    this.longitude =29.9602364242958;
    this.latitude =31.324048029083443;

  }
  
  onMapClicked(event: any){
    // console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    // this.item.destination_location_long =event.coords.lng;
    // this.item.destination_location_lat =event.coords.lat;
  }
}
