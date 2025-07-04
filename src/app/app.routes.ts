import { Routes } from '@angular/router';
import path from 'node:path';

import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { PeritocompuComponent } from './components/peritocompu/peritocompu.component';
import { BchilleratocompuComponent } from './components/bchilleratocompu/bchilleratocompu.component';
import { PrimariaComponent } from './components/primaria/primaria.component';
import { FinsemanaComponent } from './components/finsemana/finsemana.component';

export const routes: Routes = [
    {path:"", redirectTo:"bienvenida" ,pathMatch:"full"} ,
    {path:"bienvenida", component:BienvenidaComponent } ,
    {path:"Vespertina", component:PeritocompuComponent } ,
    {path:"Matutina", component:BchilleratocompuComponent } ,
    {path:"primaria", component:PrimariaComponent } ,
    {path:"finsemana", component:FinsemanaComponent } ,

];
