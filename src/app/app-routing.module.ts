import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './pages/users/users.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const router:Routes = [
  {
    path: '', component: UsersComponent
  },  
  {
    path: 'users/:id', component: UserEditComponent
  }
      
  
] 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
