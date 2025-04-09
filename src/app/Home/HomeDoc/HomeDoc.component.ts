import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-doc',
  imports: [],
  templateUrl: `./HomeDoc.component.html`,
  styleUrl: './HomeDoc.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDocComponent { }
