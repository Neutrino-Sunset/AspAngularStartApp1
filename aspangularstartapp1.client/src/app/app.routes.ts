import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'page1', component: Page1Component },
   { path: 'page2', component: Page2Component },
];
