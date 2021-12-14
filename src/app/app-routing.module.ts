import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import { MembershipsComponent } from './components/memberships/memberships.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'home'},
  {path: 'add-event', component:AddEventComponent},
  {path: 'list-event', component:ListEventComponent},
  {path: 'edit-event/:id', component:EditEventComponent},
  {path: 'list-users', component:ListUsersComponent},
  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'profile/:id', component:ProfileComponent},
  {path: 'memberships', component:MembershipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
