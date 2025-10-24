import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing-module';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule
  , MatCardModule
  ]
})
export class PaginaPrincipalModule { }
