import { Injectable } from '@angular/core';
import { NavsideComponent } from './navside.component'
@Injectable({
  providedIn: 'root'
})
export class ServService {
  visible: boolean;

  constructor() {
    this.visible = true;

  }
  hide() {
    this.visible = true;

  }
  show() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  }
  doSomethingElseUseful() { }

}
