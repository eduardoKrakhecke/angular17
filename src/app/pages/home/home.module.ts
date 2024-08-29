import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { TemplateDrivenFormsComponent } from "@app/components/template-driven-forms/template-driven-forms.component";
import { ReativeFormsComponent } from "@app/components/reative-forms/reative-forms.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgContentComponent } from "@app/components/ng-content/ng-content.component";
import { CiclosVidaComponent } from "@app/components/ciclos-vida/ciclos-vida.component";
import { HostComponent } from "@app/components/host/host.component";
import { ConsumeServiceComponent } from "@app/components/consume-service/consume-service.component";



@NgModule({
  declarations: [
    HomeComponent,
    TemplateDrivenFormsComponent,
    ReativeFormsComponent,
    NgContentComponent,
    CiclosVidaComponent,
    HostComponent,
    ConsumeServiceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
