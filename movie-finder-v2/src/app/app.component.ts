import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OmdbApiService } from './services/omdb-api.service';
import { OMDBResponse } from './omdbresponse'
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchtitleComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
