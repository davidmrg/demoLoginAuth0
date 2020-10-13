import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { BienestarComponent } from './components/bienestar/bienestar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bienestar', component: BienestarComponent },
  { 
    path: 'protegida', 
    component: ProtegidaComponent,
    canActivate: [AuthGuard]
  },
  { path: 'callback', component: CallbackComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
