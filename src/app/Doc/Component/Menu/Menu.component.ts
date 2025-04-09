import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './Menu.component.html',
  styleUrl: './Menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { }
