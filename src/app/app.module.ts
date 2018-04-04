import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';

import {Routes, RouterModule} from '@angular/router';

import { GetInfoService } from './get-info.service';
import { HttpModule } from '@angular/http';
import { ShowMoreComponent } from './show-more/show-more.component';

const appRoutes: Routes = [
  { path: 'user-1', component: ShowMoreComponent},
  { path: 'user-2', component: ShowMoreComponent},
  { path: 'user-3', component: ShowMoreComponent},
  { path: 'user-4', component: ShowMoreComponent},
  { path: 'user-5', component: ShowMoreComponent},
  { path: 'user-6', component: ShowMoreComponent},
  { path: 'user-7', component: ShowMoreComponent},
  { path: 'user-8', component: ShowMoreComponent},
  { path: 'user-9', component: ShowMoreComponent},
  { path: 'user-10', component: ShowMoreComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [GetInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
