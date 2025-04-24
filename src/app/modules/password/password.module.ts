import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordCheckerComponent } from './components/password-checker/password-checker.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    PasswordCheckerComponent
  ],
  exports: [
    PasswordCheckerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule
  ]
})
export class PasswordModule { }
