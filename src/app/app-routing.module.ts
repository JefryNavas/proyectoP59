import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoingresadoGuard } from './guards/noingresado.guard';
import { IngresadoGuard } from './guards/ingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoingresadoGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate: [NoingresadoGuard]
  },
  {
    path: 'menu-jugar',
    loadChildren: () => import('./pages/menu-jugar/menu-jugar.module').then( m => m.MenuJugarPageModule)
  },
  {
    path: 'progreso',
    loadChildren: () => import('./pages/progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'lectura',
    loadChildren: () => import('./pages/lectura/lectura.module').then( m => m.LecturaPageModule)
  },
  {
    path: 'modal-popover',
    loadChildren: () => import('./componentes/modal-popover/modal-popover.module').then( m => m.ModalPopoverPageModule)
  },
  {
    path: 'escritura',
    loadChildren: () => import('./pages/escritura/escritura.module').then( m => m.EscrituraPageModule)
  },
  {
    path: 'pronun',
    loadChildren: () => import('./pages/pronun/pronun.module').then( m => m.PronunPageModule)
  },
  {
    path: 'niv-leer',
    loadChildren: () => import('./pages/niv-leer/niv-leer.module').then( m => m.NivLeerPageModule)
  },
  {
    path: 'niv-write',
    loadChildren: () => import('./pages/niv-write/niv-write.module').then( m => m.NivWritePageModule)
  },
  {
    path: 'niv-comp',
    loadChildren: () => import('./pages/niv-comp/niv-comp.module').then( m => m.NivCompPageModule)
  },
  {
    path: 'niv-repasar',
    loadChildren: () => import('./pages/niv-repasar/niv-repasar.module').then( m => m.NivRepasarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'salir',
    loadChildren: () => import('./pages/salir/salir.module').then( m => m.SalirPageModule),
    canActivate: [IngresadoGuard]
  },

  {
    path: 'menu-repasar',
    loadChildren: () => import('./pages/menu-repasar/menu-repasar.module').then( m => m.MenuRepasarPageModule)
  },  {
    path: 'niv-repasar-es',
    loadChildren: () => import('./pages/niv-repasar-es/niv-repasar-es.module').then( m => m.NivRepasarEsPageModule)
  },
  {
    path: 'niv-repasar-com',
    loadChildren: () => import('./pages/niv-repasar-com/niv-repasar-com.module').then( m => m.NivRepasarComPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
