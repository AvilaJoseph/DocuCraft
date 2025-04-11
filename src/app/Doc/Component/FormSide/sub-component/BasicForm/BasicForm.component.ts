import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  imports: [
    CommonModule
  ],
  templateUrl: './BasicForm.component.html',
  styleUrl: './BasicForm.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent { 
  
  icons_show = false;
  showAdditionalFields = false;

  toggleAdditionalFields() {
    this.showAdditionalFields = !this.showAdditionalFields;
    this.icons_show = !this.icons_show;
  }

}
