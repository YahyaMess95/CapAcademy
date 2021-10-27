import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav1',
  templateUrl: './side-nav1.component.html',
  styleUrls: ['./side-nav1.component.css']
})
export class SideNav1Component implements OnInit {

  constructor() { }
  visible = false;

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
