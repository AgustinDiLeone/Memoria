import { Component, inject } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { UtilService } from '../services/util';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonCard,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonCardContent,
    CommonModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  ],
})
export class HomePage {
  constructor() {}
  private client = inject(AuthService);
  private util = inject(UtilService);
  private router = inject(Router);
  private spinner = inject(SpinnerService);
  salir() {
    this.client.singOut();
    this.util.routerLink('/login');
  }
  // Función para navegar a la página del juego pasando el nivel

  seleccionarNivel(nivel: string) {
    this.spinner.mostrar();
    this.router.navigate(['/jugar'], {
      state: { dificultad: nivel },
    });
  }
  ranking(nivel: any) {
    this.util.routerLink('/menu-posiciones');
  }
}
