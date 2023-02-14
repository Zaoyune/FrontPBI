import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { ActionComponent } from './components/action/action.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ActionOComponent } from './components/action-o/action-o.component';
import { ActionVComponent } from './components/action-v/action-v.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    FormulaireComponent,
    ActionOComponent,
    ActionVComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot([
      {path:'action', component: ActionComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
