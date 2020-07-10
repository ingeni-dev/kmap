import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login/login.component';
import { layoutComponent } from './layout/layout.component';


const routes: Routes = [{
  path: '' , component:loginComponent
},{path: 'layout', component:layoutComponent},
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
