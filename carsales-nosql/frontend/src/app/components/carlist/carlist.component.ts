import { Component } from '@angular/core';
import { ICar, NewCar } from '../../interfaces/car';
import { CarApiService } from '../../services/car-api.service';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';
import { ok, Result } from 'neverthrow';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
  carsData!: Result<ICar[], string>;
  show: boolean = false

  constructor(private _carAPIService: CarApiService) {}

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData => this.carsData = carsData)
  }

  addCar(make: string, model: string, year: string, image: string): boolean {
    let newCar = new NewCar(make, model, year, image)

    this._carAPIService.addCarDetails(newCar).subscribe(carRes => {
      carRes.match(
        // instead of refetching we could add in a car to the list of cars
        (_carRes) => this.getCars(),
        (_err) => { /* some error handling, showing a popup or something */} 
      )
    })

    return false
  }

  handleCarDeleted(_carId: string) {
    console.log("refetching")
    this.getCars()
  }
}
