import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson, Person } from '../../../shared/interfaces/person';


@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
    @Output() person= new EventEmitter<EPerson>

    onSubmit(value: any) {
      this.person.emit(value as EPerson)
    }
}
