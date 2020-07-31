import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login/login.component';
import { layoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [{
  path: 'login' , component:loginComponent
},{path: 'layout', component:layoutComponent, canActivate: [AuthGuard]},
{path:'**',redirectTo:'login'}
// ,{
//   path: "login",component:loginComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
