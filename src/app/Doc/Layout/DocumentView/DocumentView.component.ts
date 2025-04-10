import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from "../../Component/Menu/Menu.component";
import { ContainerViewComponent } from "../../Component/ContainerView/ContainerView.component";
import { FormSideComponent } from '../../Component/FormSide/FormSide.component';

@Component({
  selector: 'app-document-view',
  imports: [
    MenuComponent, 
    ContainerViewComponent,
    FormSideComponent
  ],
  templateUrl: './DocumentView.component.html',
  styleUrl: './DocumentView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewComponent { }
