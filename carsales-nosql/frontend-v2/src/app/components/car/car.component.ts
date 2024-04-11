import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() carData!: ICar
  // @Output() carDeleted: EventEmitter<string> = new EventEmitter<string>();
  carImageWidth = 300

  constructor(private _carAPIService: CarApiService) {}
  
  deleteCar(carId: string) { 
    // this._carAPIService.delCarDetails(carId).subscribe(result => { 
    //   result.match(
    //     (_success) => this.carDeleted.emit(carId),
    //     (why) => console.error(why)
    //   )
    // });
  }
}
