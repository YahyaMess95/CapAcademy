import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  text1="Merci de faire le paiement sur ce RIB :";
  text2="25036000000044745844 ,";
  text3="aprés vous contacter notre direction pour confirmer votre paiement";
  constructor( ) { }

  ngOnInit(): void {
  }

}
