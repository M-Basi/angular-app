import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson, ManyPerson, Person } from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

    currentPerson: EPerson | undefined;
    

    onPerson(person: EPerson) {
      console.log("From Parent>>>>", person)
      this.currentPerson = person;
      ManyPerson.push(person)
      console.log("Currentperson>>", this.currentPerson)
      console.log("Persons>>>", ManyPerson)
    }
}
