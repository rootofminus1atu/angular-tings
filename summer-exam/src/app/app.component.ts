import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffMember } from './interfaceStaff';
import { MockapiService } from './mockapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  results: StaffMember[] = []
  // results!: StaffMember[]

  constructor(private _mockapi: MockapiService) {}

  ngOnInit() {
    this.getStaff()
  }

  getStaff() {
    this._mockapi.getStaffDetails().subscribe(data => 
      this.results = data
    )
  }
}
