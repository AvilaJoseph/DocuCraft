import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-home-doc',
  imports: [
    HeaderComponent
  ],
  templateUrl: `./HomeDoc.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDocComponent { }
