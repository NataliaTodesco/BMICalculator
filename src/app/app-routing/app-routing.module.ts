import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { ResultadoComponent } from '../components/resultado/resultado.component';
   import { DashboardComponent } from '../dashboard/dashboard.component'

   const routes: Routes = [
   {
      path: '',
      component: InicioComponent,
   },
   {
      path: 'resultado/:valor', 
      component: ResultadoComponent
   },
   {
      path: '**', redirectTo: ''
   }
   ];

   @NgModule({
   imports: [
   RouterModule.forRoot(routes)
   ],
   exports: [
   RouterModule
   ],
   declarations: []
   })
   export class AppRoutingModule { }