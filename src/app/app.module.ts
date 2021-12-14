import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembershipsComponent } from './components/memberships/memberships.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    EditEventComponent,
    ListEventComponent,
    ListUsersComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    MembershipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  
    MembershipsComponent
  ]
})
export class AppModule { }
