import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  obtenerImagenes(nivel: string): string[] {
    let imagenes: string[] = [];

    switch (nivel) {
      case 'facil':
        imagenes = [
          '/assets/imagenes/animales/elefante.png',
          '/assets/imagenes/animales/leon.png',
          '/assets/imagenes/animales/pato.png',
        ];
        break;
      case 'medio':
        imagenes = [
          '/assets/imagenes/herramientas/destornillador.png',
          '/assets/imagenes/herramientas/llave.png',
          '/assets/imagenes/herramientas/martillo.png',
          '/assets/imagenes/herramientas/metro.png',
          '/assets/imagenes/herramientas/serrucho.png',
        ];
        break;
      case 'dificil':
        imagenes = [
          '/assets/imagenes/frutas/arandano.png',
          '/assets/imagenes/frutas/banana.png',
          '/assets/imagenes/frutas/coco.png',
          '/assets/imagenes/frutas/manzana.png',
          '/assets/imagenes/frutas/naranja.png',
          '/assets/imagenes/frutas/pera.png',
          '/assets/imagenes/frutas/sandia.png',
          '/assets/imagenes/frutas/uva.png',
        ];
        break;
      default:
        console.error('Nivel no reconocido');
        return [];
    }

    // Duplica las imágenes para formar pares y mezcla aleatoriamente
    const imagenesDuplicadas = [...imagenes, ...imagenes];
    return this.shuffle(imagenesDuplicadas);
  }

  iniciarJuego(imagenes: string[]) {
    return imagenes.map((imagen) => ({
      id: imagen,
      imagen,
      volteada: false,
    }));
  }

  // Mezcla las cartas aleatoriamente
  private shuffle(array: string[]): string[] {
    let currentIndex = array.length;
    let randomIndex: number;
    let temporaryValue: string;

    // Mientras haya elementos por mezclar
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex); // Elige un índice aleatorio
      currentIndex -= 1; // Decrece el índice restante
      temporaryValue = array[currentIndex]; // Guarda el valor actual
      array[currentIndex] = array[randomIndex]; // Intercambia los valores
      array[randomIndex] = temporaryValue; // Coloca el valor original en el nuevo índice
    }
    return array;
  }
}
