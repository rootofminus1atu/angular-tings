import { Component } from '@angular/core';
import { ICar, NewCar } from '../../interfaces/car';
import { CarApiService } from '../../services/car-api.service';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
  carsData: ICar[] = []
  show: boolean = true
  constructor(private _carAPIService: CarApiService) {}

  ngOnInit() {
    this.getCars()
  }

  // todo: Result type to hopefully eliminate the annoying if/else or something else
  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData => { 
      if (typeof carsData === 'string') {
        console.error("the carsData is a string (error):", carsData)
        return
      } else {
        this.carsData = carsData
        console.log(carsData)
      }
    })
  }


  addCar(make:string, model:string, year:string, image:string): boolean {
    let newCar = new NewCar(make, model, year, image)

    this._carAPIService.addCarDetails(newCar).subscribe(carsData => { 
      if (typeof carsData === 'string') {
        console.error("the carsData is a string (error):", carsData)
        return
      } else {
        console.log(carsData)
        // carsData returned from `addCarDetails` is 
        // {acknowledged: true, insertedId: '65fad24be55626ad7ccfc0b0'}
        // rather than a list of cars

        // quick fix:
        // change `this.carsData = carsData` to:
        this.getCars()
      }
    })

    return false
  }
  
}
