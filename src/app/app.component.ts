import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentViewComponent } from "./Doc/Layout/DocumentView/DocumentView.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DocumentViewComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent {
  title = 'doc_creator';
}
