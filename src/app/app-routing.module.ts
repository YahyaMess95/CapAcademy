import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './ident/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {GformationComponent} from './admin/gformation/gformation.component';
import {AcceuilComponent} from './admin/acceuil/acceuil.component';
import {GformateurComponent} from './admin/gformateur/gformateur.component';
import {EtudeComponent} from './admin/etude/etude.component';
import {ContenuFComponent} from './admin/contenu-f/contenu-f.component';
import {ClientComponent} from './client/client.component';

import {DemandesComponent} from './client/demandes/demandes.component';

import {PaiementComponent} from './client/paiement/paiement.component';
import {ChercherComponent} from './client/chercher/chercher.component';
import {FormationsComponent} from './client/formations/formations.component';


const routes: Routes = [



  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'admin', component: AdminComponent , children: [{ path: 'formation', component: GformationComponent} , { path: 'accueil', component: AcceuilComponent}, { path: 'formateur', component: GformateurComponent} , { path: 'etude', component: EtudeComponent}, { path: 'contenuF', component: ContenuFComponent} ]
  },


  {
    path: 'client', component: ClientComponent , children: [{ path: 'chercher', component: ChercherComponent} , { path: 'demande', component: DemandesComponent}, { path: 'formations', component:  FormationsComponent} , { path: 'paiement', component: PaiementComponent} , { path: 'formation', component: FormationsComponent}  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
