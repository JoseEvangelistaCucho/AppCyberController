import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pantallas
import { LoginComponent } from './modules/login/login.component';
import { ControladorCyberComponent} from './modules/controlador-cyber/controlador-cyber.component';


//shared
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalCargandoDialog } from './shared/modal/modal-cargando/modal-cargando.dialog';
import { ModalConfirmacionDialog } from './shared/modal/modal-confirmacion/modal-confirmacion.dialog';
import { ModalErrorDialog } from './shared/modal/modal-error/modal-error.dialog';
import { ModalInformacionDialog } from './shared/modal/modal-informacion/modal-informacion.dialog';
import { ModalAdvertenciaDialog } from './shared/modal/modal-advertencia/modal-advertencia.dialog';


const routes: Routes = [
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Controlador',
    component: ControladorCyberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
  LoginComponent,
  ControladorCyberComponent,
  HeaderComponent,
  FooterComponent,


  ModalCargandoDialog,
  ModalConfirmacionDialog,
  ModalAdvertenciaDialog,
  ModalInformacionDialog,
  ModalErrorDialog
]