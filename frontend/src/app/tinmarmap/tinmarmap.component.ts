import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

declare var google: any;

@Component({
  selector: 'app-tinmarmap',
  templateUrl: './tinmarmap.component.html',
  providers: [MessageService],
  styles: [`
        .p-col-2 {
            display: flex;
            align-self: center;
        }
    `]
})

export class TinmarmapComponent implements OnInit {

  options: any;

  overlays = [
    new google.maps.Marker({position: {lat: 44.4224307, lng: 26.1299633}, title:"Konyaalti"}),
    new google.maps.Marker({position: {lat: 44.4229642, lng: 26.1304308}, title:"Ataturk Park"})
];

  ngOnInit() {


      this.options = {
          center: {lat: 44.4225426, lng: 26.1300614},
          zoom: 16
      };
  }

  addMarker() {
    this.overlays.push(new google.maps.Marker({position:{lat:44.4225426, lng: 26.1300614}, title:'Test'}));
}


  }
