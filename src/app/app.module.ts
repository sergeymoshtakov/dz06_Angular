import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { TestFilterComponent } from './test-filter/test-filter.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import {UsersService} from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TestFilterComponent,
    UsersComponent,
    UserComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
