import { Component, OnInit  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router} from '@angular/router';

import { JsBase } from '../../../app/core/base/JsBase';
import { ApiService } from 'src/app/service/api.service';
import { ControllerDate } from '../../core/interfaces/JsInterfaces';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-controlador-cyber',
  templateUrl: './controlador-cyber.component.html',
  styleUrls: ['./controlador-cyber.component.sass']
})
export class ControladorCyberComponent extends JsBase implements OnInit {
 
  showInput = false;
  inputValue = '';
  showClock = false;
  selectedTime: string = '';
  
  private intervalId: any;
  controllerDateOne : ControllerDate = {
  } as ControllerDate;

  controllerDateTwo : ControllerDate = {    
  } as ControllerDate;

  controllerDateThree : ControllerDate = {    
  } as ControllerDate;

  controllerDateFour : ControllerDate = {    
  } as ControllerDate;

  controllerDateFive : ControllerDate = {    
  } as ControllerDate;

  constructor( private router: Router,private api: ApiService, public override dialog: MatDialog) { 
    super(dialog);
  } 

  ngOnInit(): void {

  }

  toggleClock() {
    this.showClock = !this.showClock;
    this.selectedTime = '';
  }
  captureTime() {
      // Aquí puedes realizar cualquier acción con el valor seleccionado de la hora
      console.log(this.selectedTime);
  }


  fcount(controllerDate: any) {
    this.stopCount();
    this.toggleClock();

    this.showInput = !this.showInput;
    this.inputValue = '';
    if(controllerDate.amount > 0){
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
    
      this.intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
    
        controllerDate.state = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
      }, 1000);
    }
  }
  
  padZero(value: number) {
    return value.toString().padStart(2, '0');
  }


  stopCount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onInitialTime(controllerDate: any) {
    const fechaActual = new Date();
    controllerDate.initial = formatDate(fechaActual, 'h:mm:ss a', 'en-US');
    this.fcount(controllerDate);
  }

}
