import { Component, OnInit } from '@angular/core';
import{Seances}from './mseance';
import{MServService}from'./m-serv.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-mseance',
  templateUrl: './mseance.component.html',
  styleUrls: ['./mseance.component.css']
})
export class MseanceComponent implements OnInit {
  search ="";
  tab : Seances[];

  constructor( private fr : MServService ) { }

  getAff()
  {
    this.fr.getformation().subscribe(data =>this.tab =data)
  }

  ngOnInit(): void {
    this.getAff();

  }

}
