import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { TemplateDrivenFormsComponent } from "@app/components/template-driven-forms/template-driven-forms.component";
import { ReativeFormsComponent } from "@app/components/reative-forms/reative-forms.component";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    TemplateDrivenFormsComponent,
    ReativeFormsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,

  ]
})
export class HomeModule { }
