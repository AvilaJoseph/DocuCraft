import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-side',
  imports: [
    CommonModule
  ],
  templateUrl: './FormSide.component.html',
  styleUrl: './FormSide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSideComponent { 

  showAdditionalFields = false;

  toggleAdditionalFields() {
    this.showAdditionalFields = !this.showAdditionalFields;
  }
}
