import { Routes } from '@angular/router';
import { PaginaPrimaria } from './pagina-principal/pagina-primaria/pagina-primaria';

export const routes: Routes = [
  { path: '', redirectTo: 'pagina-principal', pathMatch: 'full' },
  {  path:'', component: PaginaPrimaria}
];
