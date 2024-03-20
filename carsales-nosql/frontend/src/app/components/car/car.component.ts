import { Component, Input } from '@angular/core';
import { ICar } from '../../interfaces/car';
import { CarApiService } from '../../services/car-api.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData?: ICar
  carImageWidth = 300

  constructor(private _carAPIService: CarApiService) {}

  
  deleteCar(carId: string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result => { 
      // here we should prob also somehow call getCars()
      console.log(result);
    });
  }
}
