import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordCheckerComponent} from './components/password-checker/password-checker.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { MessageModule } from 'primeng/message';


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
    MessageModule,
    InputTextModule,
    MessageModule
  ]
})
export class PasswordModule {
}
