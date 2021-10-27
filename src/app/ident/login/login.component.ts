import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private message1: NzMessageService ,   private cdr: ChangeDetectorRef , private modalService: NgbModal , private http: HttpClient, private router: Router) {

  }

  url = 'http://localhost:8080/' ;

  closeResult = '';
  username: any ;
  password: any ;

  selectedValue1: any ;
  isVisible = false;
  isOkLoading = false;
  passwordVisible = false;

  Region = [
    { label: 'Tunis', value: 'Tunis' },
    { label: 'Ariana', value: 'Ariana'} ,
    { label: 'Ben Arous', value: 'Ben Arous'} ,
    { label: 'Manouba', value: 'Manouba'} ,
    { label: 'Nabel', value: 'Nabel'} ,
    { label: 'Zaghouan', value: 'Zaghouan'} ,
    { label: 'Bizert', value: 'Bizert'} ,
    { label: 'Beja', value: 'Beja'} ,
    { label: 'Jandouba', value: 'Jandouba'} ,
    { label: 'El Kef', value: 'El kef'} ,
    { label: 'Siliana', value: 'Siliana'} ,
    { label: 'Sousse', value: 'Sousse'} ,
    { label: 'Monastir', value: 'Monastir'} ,
    { label: 'Mahdia', value: 'Mahdia'} ,
    { label: 'Sfax', value: 'Sfax'} ,
    { label: 'Kairouan', value: 'Kairouan'} ,
    { label: 'Kasserine', value: 'Kasserine'} ,
    { label: 'Sidi bouzid', value: 'Sidi bouzid'} ,
    { label: 'Gabes', value: 'Gabes'} ,
    { label: 'Medenin', value: 'Medenin'} ,
    { label: 'Gafsa', value: 'Gafsa'} ,
    { label: 'Tozeur', value: 'Tozeur'} ,
    { label: 'Kébili', value: 'Kébili'}];


  nivAct: any;
  mdp: any;
  numTel: any;
  Email: any;
  prenom: any;
  nom: any;

  message: any ;
  test: any ;

  ngOnInit(): void {
  }






  showModal(): void {
    this.isVisible = true;
  }



  AjoutCompte()
  {
    this.http.get<message>(this.url + 'AddUser/' + this.Email + '/' + this.nom + '/' + this.prenom + '/' + this.selectedValue1.label + '/' + this.mdp + '/' + this.nivAct + '/' + this.numTel)
   .subscribe(res =>  this.test = res.etat , ex => console.log(ex)) ;
    if (this.test === true )
    { this.message1.create('success', `Compte ajouté avec succés`);

      this.handleOk(); }

    if (this.test === false )
    { this.message1.create('error', `Compte existant déja`); }


  }



  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  connexion()
  {
    if (this.password === 'Admin' || this.username === 'Admin' ){
    this.router.navigate(['admin/accueil']);

    }
    if (this.password === '' || this.username === '' ){this.message1.create('error', `il faut remplir l'email et le mot de passe !!`); }

    else {



      this.http.get(this.url + 'findUser/' +  this.username + '/' + this.password).subscribe(res => {if (res === null ){this.message1.create('error', `vérifier l'email et le mot de passe !!`); } else {localStorage.setItem('session', this.username);  this.router.navigate(['client/chercher']) ; } } , ex => console.log(ex)) ; }


  }


}

interface  message {
  message: string ;
  etat: boolean ;
}
