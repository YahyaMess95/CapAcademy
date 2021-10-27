import { Component, OnInit } from '@angular/core';
import {SortEvent} from 'primeng/api';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {UploadFileService} from '../upload/upload-file.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-gformation',
  templateUrl: './gformation.component.html',
  styleUrls: ['./gformation.component.css']
})
export class GformationComponent implements OnInit {

  url = 'http://localhost:8080/' ;

  constructor(private http: HttpClient , private message1: NzMessageService , private Upload: UploadFileService ) { }



  isVisible = false;
  NomFormation: any;
  Ref: any;
  Prix: any;
  dat1: any;
  dat2: any;
  spec: any;
  cols: any[];
  products: any;
  formateur: any ;
  selectedValue3: any;
  selectedValue4: any;
  isVisible1: any;
  isVisible2: any;
  formateurbyformation : any[] ;
  isVisible3: any;
  contenuF: any ;
idFormation: any ;

  ngOnInit(): void {


    this.http.get(this.url + 'ListFormation').subscribe(res => this.products = res , ex => console.log(ex)) ;
    this.http.get(this.url + 'formateur/getAll').subscribe(res => this.formateur = res , ex => console.log(ex)) ;


  }


    supprimer(id)
  {

    this.http.delete(this.url + 'deleteFormation/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;
    setTimeout(() => {
      this.http.get(this.url + 'ListFormation').subscribe(res => this.products = res , ex => console.log(ex)) ;

    }, 500);

  }

 showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    // console.log('Button ok clicked!');
    this.isVisible = false;

    this.http.get(this.url + 'AjoutFormation/' + this.NomFormation + '/' + this.Ref + '/' + this.dat1 + '/' + this.dat2 + '/' + this.Prix + '/' + this.spec )
        .subscribe(res => console.log(res) , ex => console.log(ex)) ;
    this.http.get(this.url + 'ListFormation').subscribe(res => this.products = res , ex => console.log(ex)) ;

    setTimeout(() => {
      this.http.get(this.url + 'ListFormation').subscribe(res => this.products = res , ex => console.log(ex)) ;
      this.message1.create('success', `Formation ajoutée avec succées!!`);

    }, 500);

  }





  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  handleCancel1() {
    this.isVisible1 = false;
  }

  handleOk1() {


  this.http.get(this.url + 'affection/ajout' + '/' + this.selectedValue3.id + '/' + this.selectedValue4.id).subscribe(res => console.log(res) , ex=> console.log(ex)) ;
  this.isVisible1 = false;

  }

  showModal1(): void {
    this.isVisible1 = true;
  }


  showModal2(id): void {
    this.http.get<any>(this.url + 'formateurByformation/' + id).subscribe(res => this.formateurbyformation = res   , ex => console.log(ex) ) ;
    this.isVisible2 = true;
  }




  handleCancel2() {
    this.isVisible2 = false;
  }

  handleOk2() {


     this.isVisible2 = false;

  }





  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  isVisible4: any;
  isVisible5: any;
  Lien: any;

  chaine: any;








  handleOk3() {

   // this.isVisible3 = false;

    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.Upload.pushFileToStorage(this.currentFileUpload , this.idFormation).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
    this.http.get(this.url + 'ContenuF/ListContenuF/' ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;

  }

  showModal3(id: any) {

    this.idFormation = id ;

    this.isVisible3 = true;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  handleCancel3() {

    this.isVisible3 = false;
    this.progress.percentage = 0;


  }

  handleCancel4() {
    this.isVisible4 = false;
  }

  handleOk4() {
    this.isVisible4 = false;
  }

  showModal4(id: any) {

    this.isVisible4 = true;
    this.http.get(this.url + 'ContenuF/ListContenuF/' + id ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;

  }



  delete(id){
    this.http.delete(this.url + 'ContenuF/delete/' + id  ).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {
      this.http.get(this.url + 'ContenuF/ListContenuF/' + this.idFormation  ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;


    }, 500);

  }



  handleCancel5() {
    this.isVisible5 = false;
  }
  nomFC : any ;
  dateFC : any ;

  showModal5(id: any , nom , date ) {

    this.idFormation = id ;
    this.nomFC = nom ;
    this.dateFC = date ;

    this.isVisible5 = true;

  }


  handleOk5() {this.http.get( this.url + '/AjouterSeance/' + this.idFormation  + '/' + this.chaine + '/' + this.nomFC  ).subscribe(res => console.log(res) , ex => console.log(ex)) ;
  this.isVisible5 = false;
  }






}



