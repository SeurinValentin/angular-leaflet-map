import { Component, OnInit } from '@angular/core';
import countries from '../data/capitals';
interface Capital {
  id: number;
  country: string;
  city: string;
  population: number;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-screen2',
  template: '../second-screen/second-screen.component.html',
})
export class Screen2Component implements OnInit {
  capitals: Capital[] = [];
  newCapital: Capital = {
    id: 0,
    country: '',
    city: '',
    population: 0,
    lat: 0,
    lng: 0,
  };

  ngOnInit() {
    // Initialiser les capitales ici si nécessaire
  }

  handleAddCapital() {
    this.capitals.push({ ...this.newCapital, id: this.capitals.length + 1 });
    this.newCapital = {
      id: 0,
      country: '',
      city: '',
      population: 0,
      lat: 0,
      lng: 0,
    };
  }

  handleDelete(id: number) {
    this.capitals = this.capitals.filter((capital) => capital.id !== id);
  }

  handleChange(id: number, key: keyof Capital, value: string | number) {
    const index = this.capitals.findIndex((capital) => capital.id === id);
    if (index !== -1) {
      this.capitals[index] = { ...this.capitals[index], [key]: value };
    }
  }
}
