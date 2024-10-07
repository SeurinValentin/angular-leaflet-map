import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-mouse-position';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [48.866669, 2.33333],
      zoom: 5,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    (L.control as any).mousePosition().addTo(this.map);
  }

  constructor() {}
  ngAfterViewInit(): void {
    this.initMap();
  }
}
