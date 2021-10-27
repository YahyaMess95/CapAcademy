import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntreComponent } from './entre.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { MseanceComponent } from './pages/mseance/mseance.component';
import { MdemandesComponent } from './pages/mdemandes/mdemandes.component';
import { ChercherComponent } from './pages/chercher/chercher.component';
import { PaiementComponent } from './pages/paiement/paiement.component';

const routes: Routes = [{ path: '', component: EntreComponent ,

 children:[
  { path:'' ,redirectTo:'MFormations',pathMatch:'full'},
  {
    path:'MFormations',
    component:FormationsComponent}, {
 
    path:'MSeances',
    component:MseanceComponent
  },
  
  {
    path:'MDemandes',
    component:MdemandesComponent
  },
  {
    path:'Chercher',
    component:ChercherComponent
  },
  {
    path:'Paiement',
    component:PaiementComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreRoutingModule {   }
