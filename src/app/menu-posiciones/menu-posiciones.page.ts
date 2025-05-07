import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util';

@Component({
  selector: 'app-menu-posiciones',
  templateUrl: './menu-posiciones.page.html',
  styleUrls: ['./menu-posiciones.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class MenuPosicionesPage {
  private util = inject(UtilService);
  private router = inject(Router);
  private spinner = inject(SpinnerService);
  volver() {
    this.util.routerLink('/home');
  }
  // Función para navegar a la página del juego pasando el nivel

  seleccionarNivel(nivel: string) {
    this.spinner.mostrar();
    this.router.navigate([`/mejores-resultados/${nivel}`]);
  }
}
