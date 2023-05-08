import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {environment} from '../environments/environment';

import {UserRequest } from '../core/interfaces/JsInterfaces';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {

    apiRest = environment.apiRest.host;

    constructor(private http: HttpClient) { 
    }

    getUserValidate(userRequest: UserRequest) : Observable<boolean> {
        return this.http.get<boolean>(this.apiRest+"/User?user="+userRequest.user+"&password="+userRequest.password);  
      }

  }