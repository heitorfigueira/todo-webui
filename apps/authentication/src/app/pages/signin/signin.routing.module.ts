import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

const routes: Route[] = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'lost-password',
    component: LostPasswordComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SigninRoutingModule {}
