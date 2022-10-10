import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module')
      .then(m => m.SignupModule)
  },
  {
    path: '**',
    redirectTo: 'signin'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
