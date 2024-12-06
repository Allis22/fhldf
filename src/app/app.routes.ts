import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MyComponent } from './components/my/my.component';

export const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'my', component: MyComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent },
  ];
  
