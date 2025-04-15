import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicFormComponent } from "./sub-component/BasicForm/BasicForm.component";
import { SectionFormComponent } from "./sub-component/SectionForm/SectionForm.component";

@Component({
  selector: 'app-form-side',
  imports: [
    CommonModule,
    BasicFormComponent,
    SectionFormComponent
],
  templateUrl: './FormSide.component.html',
  styleUrl: './FormSide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSideComponent { 


}
