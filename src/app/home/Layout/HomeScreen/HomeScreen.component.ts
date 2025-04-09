import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './HomeScreen.component.html',
  styleUrl: './HomeScreen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeScreenComponent { }
