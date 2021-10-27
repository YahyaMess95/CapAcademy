import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  mode = new FormControl('push');
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }
public onToggleSidenav =() =>{}
}
