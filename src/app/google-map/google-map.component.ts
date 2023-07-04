import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 7, lng: 80};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 10;

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }

  openInfoWindow(marker: MapMarker) {
    if(this.infoWindow != undefined)
    this.infoWindow.open(marker);
  }

  displayForm = false;

  showForm() {
    this.displayForm = true;
  }

}
