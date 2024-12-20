import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SalirComponent } from './salir/salir.component';
import { DestinosComponent } from './destinos/destinos.component';

const routes: Routes = [
  {path:"",component:AppComponent},
  {path:"home", component: HomeComponent},
  {path: "compra", component:ComprasComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "salir", component:SalirComponent},
  {path:"destinos",component:DestinosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
