import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ActionComponent } from './components/action/action.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ActionOComponent } from './components/action-o/action-o.component';
import { ActionVComponent } from './components/action-v/action-v.component';

const routes: Routes = ([  { path: 'action', component: ActionComponent },
                          {path: 'formulaire', component: FormulaireComponent},
                          { path: 'actionO', component: ActionOComponent },   
                          { path: 'actionV', component: ActionVComponent },                        
]);

@NgModule({  
  imports: [CommonModule,RouterModule.forRoot(routes)],  
  exports: [RouterModule],  declarations: []})
  
  export class AppRoutingModule { }