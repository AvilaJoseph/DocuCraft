import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from "../../Component/Menu/Menu.component";

@Component({
  selector: 'app-document-view',
  imports: [MenuComponent],
  templateUrl: './DocumentView.component.html',
  styleUrl: './DocumentView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewComponent { }
