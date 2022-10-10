import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { SigninRoutingModule } from './signin.routing.module';

@NgModule({
  declarations: [
    SigninComponent,
     LostPasswordComponent
    ],
  imports: [
    CommonModule,
    SigninRoutingModule
  ],
})
export class SigninModule {}
