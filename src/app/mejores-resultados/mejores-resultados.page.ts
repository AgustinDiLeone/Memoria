import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../services/util';

@Component({
  selector: 'app-mejores-resultados',
  templateUrl: './mejores-resultados.page.html',
  styleUrls: ['./mejores-resultados.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MejoresResultadosPage implements OnInit {
  mejores: any[] = [];
  private supabase = inject(AuthService);
  private route = inject(ActivatedRoute);
  private util = inject(UtilService);
  dificultad: any;

  async ngOnInit() {
    this.dificultad = this.route.snapshot.paramMap.get('dificultad') as
      | 'facil'
      | 'medio'
      | 'dificil';
    if (!['facil', 'medio', 'dificil'].includes(this.dificultad)) {
      console.error('Dificultad no válida');
      return;
    }

    await this.cargarResultados(this.dificultad);
  }

  async cargarResultados(dificultad: 'facil' | 'medio' | 'dificil') {
    const { data, error } = await this.supabase.supabaseClient
      .from(dificultad)
      .select('correo, fecha, tiempo')
      .order('tiempo', { ascending: true })
      .limit(5);

    if (error) {
      console.error('Error al obtener los resultados:', error.message);
    } else {
      this.mejores = data;
    }
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleString();
  }

  formatearTiempo(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }
  volverAlMenu() {
    this.util.routerLink('/home'); // ajustá la ruta si tu menú principal tiene otro path
  }
}
