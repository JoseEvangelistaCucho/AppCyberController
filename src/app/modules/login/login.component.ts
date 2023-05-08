import { Component, OnInit  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router} from '@angular/router';

import { JsBase } from '../../../app/core/base/JsBase';
import { ApiService } from 'src/app/service/api.service';
import { UserRequest } from '../../core/interfaces/JsInterfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends JsBase implements OnInit {

      hide = true;
      userRequest : UserRequest = {} as UserRequest;

      response : boolean = {} as boolean;

      constructor( private router: Router,private api: ApiService, public override dialog: MatDialog) { 
        super(dialog);
      } 

      ngOnInit(): void {
      }

      onValidateUser(){
        this.abrirCargando();
        this.api.getUserValidate(this.userRequest).subscribe( response =>{
            this.cerrarCargando();
            this.userRequest =this.userRequest; 
            this.response = this.response;
            this.cerrarCargando();
            this.router.navigate(['/Controlador']);
        })
      }
}
