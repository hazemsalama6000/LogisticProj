import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FreightService } from 'src/app/service/freight.service';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { HostListener } from '@angular/core';
import SwiperCore from 'swiper';
import { ViewEncapsulation } from '@angular/core';
import { Virtual } from 'swiper';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-localfrieghtnewrequest',
  templateUrl: './localfrieghtnewrequest.component.html',
  styleUrls: ['./localfrieghtnewrequest.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LocalfrieghtnewrequestComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  cats: any;
  country: any;
  city: any[] = [];
  goodcats: any;
  currencys: any;
  currentDate: any = new Date();
  language: any;
  pickup_location_lat: any;
  pickup_location_long: any;
  destination_location_lat: any;
  destination_location_long: any;
  // flow :any;
  // country_origin_id :any;
  // country_destination_id :any;
  estimated_date: any;
  commercial_reference: any;
  quote_currency_id: any;
  goods_country_origin_id: any;
  category_id: any;
  value: any;
  description: any;
  currency_id: any;
  file: any;
  zip_code: any;
  weight: any;
  volume: any;
  pickup_insure: any;
  pickup_city_id: any;
  palletized: any;
  need_pickup: any;
  insure_good: any;
  bulks: any;
  lat: any;
  lng: any;
  currentlng: any;

  latitude!: number;
  longitude!: number;
  latitude_dest!: number;
  longitude_dest!: number;
  address: string = "";
labelinit=0;
  currentPosition: any;

  @ViewChild('search') public searchElementRef!: ElementRef<HTMLInputElement>;

  @ViewChild('searchToDestination', { static: false }) public searchDestElementRef!: ElementRef<HTMLInputElement>;

  private geoCoder: any;
  zoom: number = 0;


  @ViewChild('swiper', { static: false }) swiper: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _FreightService: FreightService,
    private gatcatser: GeneralService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }//

  ngOnInit(): void {
    this.getcategory();
    this.getcurency();
    this.getGoodCategory();
    this.getCountry();
    this.getCity();
    this.currentlng = localStorage.getItem('currentLang');
  }

  ngAfterViewInit(): void {
    this.initializeFromLocation();
  }

  initializeFromLocation() {

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location!.lat();
          this.longitude = place.geometry.location!.lng();
          this.item.pickup_location_long = this.longitude;
          this.item.pickup_location_lat = this.latitude;
          this.zoom = 12;
        });
      });
    });

  }

  initializeDestLocation() {

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocationForDest();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchDestElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude_dest = place.geometry.location!.lat();
          this.longitude_dest = place.geometry.location!.lng();

          this.item.destination_location_long = this.longitude_dest;
          this.item.destination_location_lat = this.latitude_dest;
          this.zoom = 12;
        });
      });
    });

  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        this.item.pickup_location_long = this.longitude;
        this.item.pickup_location_lat = this.latitude;

        this.zoom = 8;
       // this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  private setCurrentLocationForDest() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude_dest = position.coords.latitude;
        this.longitude_dest = position.coords.longitude;

        this.item.pickup_location_long = this.longitude_dest;
        this.item.pickup_location_lat = this.latitude_dest;

        this.zoom = 8;
       // this.getAddress(this.latitude, this.longitude);
      });
    }
  }

/*   getAddress(latitude: any, longitude: any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  } */

  submit(): void {
    this._FreightService
      .addLocalFreight(Helper.toFormData(this.item))
      .subscribe((res) => {
        this.router.navigate(['/local-send-request']);
      });
  }
  getcategory() {
    this.gatcatser.getAllCategory().subscribe((res: any) => {
      this.cats = res.data;
    });
  }
  getcurency() {
    this.gatcatser.getAllCurrency().subscribe((res: any) => {
      this.currencys = res.data;
    });
  }
  getGoodCategory() {
    this.gatcatser.getGoodCategory().subscribe((res: any) => {
      this.goodcats = res.data;
    });
  }
  getCountry() {
    this.gatcatser.getCountry().subscribe((res: any) => {
      this.country = res.data;
    });
  }
  getCity() {
    this.gatcatser.getCountry().subscribe((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j < res.data[i].cities.length; j++) {
          this.city.push(res.data[i].cities[j]);
        }
      }
    });
  }
  onMapClicked(event: any) {
    console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.item.pickup_location_long = event.coords.lng;
    this.item.pickup_location_lat = event.coords.lat;
  }
  onMapClicked_dest(event: any) {
    console.table(event.coords);
    this.latitude_dest = event.coords.lat;
    this.longitude_dest = event.coords.lng;
    this.item.destination_location_long = event.coords.lng;
    this.item.destination_location_lat = event.coords.lat;
  }

  // moveto(section: any) {
  //   section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }
  slideNext() {
    this.swiper.swiperRef.slideNext(100);
    //  this.initializeDestLocation();

  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  onSlideChange(event: any) {
    if (event[0].activeIndex == 2 && this.labelinit==0) {
     this.initializeDestLocation();
     this.labelinit+=1;
    }
  }
}
