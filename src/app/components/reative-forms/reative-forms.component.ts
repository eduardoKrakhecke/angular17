import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-reative-forms',
  standalone: false,
  templateUrl: './reative-forms.component.html',
  styleUrl: './reative-forms.component.scss'
})
export class ReativeFormsComponent {

  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('node')
    }),
    myFavoriteFoods: new FormArray([
      new FormControl('X salada'),
    ])
  })


  public updateName() {
    this.profileForm.patchValue({
      name: 'Dudu',
      myStacks: {
        front: 'Angular'
      }
    })
  }

  public addMyFavoriteFoods(newFood: string){
    const myFavoriteFoods  = this.profileForm.get('myFavoriteFoods') as FormArray
    const add = new FormControl(newFood)

    myFavoriteFoods.push(add)
  }
}
