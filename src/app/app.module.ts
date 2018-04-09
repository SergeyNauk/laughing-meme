import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';

import { RouterModule, Routes } from '@angular/router';

import { GetInfoService } from './get-info.service';
import { HttpModule } from '@angular/http';
import { ShowMoreComponent } from './show-more/show-more.component';


const appRoutes: Routes = [
  { path: 'user/:id', component: ShowMoreComponent },
  { path: 'new', component: ShowMoreComponent },
  { path: '**', component: UserTableComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ShowMoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [GetInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
