import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'jugar',
    loadComponent: () => import('./jugar/jugar.page').then((m) => m.JugarPage),
  },
  {
    path: 'mejores-resultados/:dificultad',
    loadComponent: () =>
      import('./mejores-resultados/mejores-resultados.page').then(
        (m) => m.MejoresResultadosPage
      ),
  },
  {
    path: 'menu-posiciones',
    loadComponent: () => import('./menu-posiciones/menu-posiciones.page').then( m => m.MenuPosicionesPage)
  },
];
