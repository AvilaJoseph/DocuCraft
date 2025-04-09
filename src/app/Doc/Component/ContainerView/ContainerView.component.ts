import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container-view',
  imports: [],
  templateUrl: './ContainerView.component.html',
  styleUrl: './ContainerView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerViewComponent { }
