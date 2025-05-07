import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { JuegoService } from '../services/juego.service';
interface Carta {
  id: string;
  imagen: string;
  volteada: boolean;
}

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonContent],
})
export class JugarPage {
  cartas: Carta[] = [];
  cartasVolteadas: { carta: Carta; index: number }[] = []; // Tipamos correctamente
  tiempo = 0;
  tiempoFinal = 0;
  paresEncontrados = 0;
  timer: any;
  nivel = 'facil';

  // Inyectamos el servicio
  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    const navigation = history.state;
    if (navigation && navigation.dificultad) {
      this.nivel = navigation.dificultad;
    }

    const imagenes = this.juegoService.obtenerImagenes(this.nivel);
    this.cartas = this.juegoService.iniciarJuego(imagenes);
    this.calcularGrilla(this.cartas.length);
    this.paresEncontrados = 0;
    this.tiempo = 0;

    // Iniciar el cronómetro
    this.timer = setInterval(() => {
      this.tiempo++;
    }, 1000);
  }

  seleccionarCarta(carta: Carta, index: number) {
    if (this.cartasVolteadas.length < 2 && !carta.volteada) {
      carta.volteada = true;
      this.cartasVolteadas.push({ carta, index });

      if (this.cartasVolteadas.length === 2) {
        const [primeraCarta, segundaCarta] = this.cartasVolteadas;
        if (primeraCarta.carta.imagen === segundaCarta.carta.imagen) {
          this.paresEncontrados++;
        } else {
          setTimeout(() => {
            this.cartas[primeraCarta.index].volteada = false;
            this.cartas[segundaCarta.index].volteada = false;
          }, 1000);
        }
        this.cartasVolteadas = [];
      }
    }

    if (this.paresEncontrados === this.cartas.length / 2) {
      clearInterval(this.timer);
      this.tiempoFinal = this.tiempo;
    }
  }

  // Función para guardar el tiempo cuando termina el juego
  guardarTiempo() {
    // Aquí puedes guardar el tiempo en la base de datos (por ejemplo Firebase)
    console.log('Tiempo guardado: ', this.tiempoFinal);
    // Redirigir a otra página o mostrar mensaje de éxito
  }

  columnas = 2;
  filas = 3;

  calcularGrilla(cantidad: number) {
    if (cantidad === 6) {
      this.columnas = 2;
      this.filas = 3;
    } else if (cantidad === 10) {
      this.columnas = 2;
      this.filas = 5;
    } else if (cantidad === 16) {
      this.columnas = 4;
      this.filas = 4;
    } else {
      this.columnas = Math.ceil(Math.sqrt(cantidad));
      this.filas = Math.ceil(cantidad / this.columnas);
    }
  }
}
