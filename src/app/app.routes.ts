import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio';
import { JustificacionComponent } from './justificacion/justificacion';
import { InstalacionComponent } from './instalacion/instalacion';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos';
import { EjemploComponent } from './ejemplo/ejemplo';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento';
import { ConclusionesComponent } from './conclusiones/conclusiones';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'justificacion', component: JustificacionComponent },
  { path: 'instalacion', component: InstalacionComponent },
  { path: 'primeros-pasos', component: PrimerosPasosComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'conclusiones', component: ConclusionesComponent },
  { path: '**', redirectTo: '' }
];
