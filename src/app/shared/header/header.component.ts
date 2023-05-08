import { Component, OnInit } from '@angular/core';
import { JsBase } from '../../core/base/JsBase';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent extends JsBase implements OnInit {

  constructor(public override dialog: MatDialog) { 
    super(dialog);
  } 

  ngOnInit(): void {
  }

}
