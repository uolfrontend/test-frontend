import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ButtonComponent } from './button/button.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: 'home', component: ListUsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'edit', component: NewUserComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientPanelComponent,
    ListUsersComponent,
    ButtonComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
