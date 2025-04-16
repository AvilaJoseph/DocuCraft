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

  activeSection: string | null = null;

  sections = [
    { id: 'personal', name: 'Perfil personal' },
    { id: 'laboral', name: 'Experiencia laboral' },
    { id: 'habilidades', name: 'Habilidades' },
    { id: 'educacion', name: 'Educación' }
  ];

  toggleSection(sectionId: string): void {
    this.activeSection = this.activeSection === sectionId ? null : sectionId;
  }

 }
