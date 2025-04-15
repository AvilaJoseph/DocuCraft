import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-form',
  imports: [
    CommonModule
  ],
  templateUrl: './SectionForm.component.html',
  styleUrl: './SectionForm.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionFormComponent {
  
  icons_show = false;
  showAdditionalFields = false;

  toggleAdditionalFields() {
    this.showAdditionalFields = !this.showAdditionalFields;
    this.icons_show = !this.icons_show;
  }


 }
