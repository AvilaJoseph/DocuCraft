import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeDocComponent } from './Home/HomeDoc/HomeDoc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HomeDocComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent {
  title = 'doc_creator';
}
