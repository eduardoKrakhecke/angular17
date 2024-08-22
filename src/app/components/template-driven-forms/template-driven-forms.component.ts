import { Component, signal } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven-forms',
  standalone: false,
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {

  public listComidas = signal<Array<{ comida: string, preco: string }>>(
    [
      {comida: 'X salada', preco: '2.44'},
      {comida: 'X presunto', preco: '5.00'},
      {comida: 'X carne', preco: '350'},

    ])

  public submitForm(form: NgForm){
    console.log(form.valid)
    console.log(form.value)
  }

}
