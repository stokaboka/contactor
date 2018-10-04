import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './ui/about/about/about.component';
import {ContactsComponent} from './ui/about/contacts/contacts.component';
import {MainPanelComponent} from './ui/layout/main-panel/main-panel.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/messenger', pathMatch: 'full' },
  { path: 'messenger', component: MainPanelComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  // declarations: []
})
export class AppRoutingModule { }
