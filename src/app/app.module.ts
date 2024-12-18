import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { MenuModule } from 'primeng/menu';
import { ComprasComponent } from './compras/compras.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MessageModule } from 'primeng/message';
import { SalirComponent } from './salir/salir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComprasComponent,
    ContactoComponent,
    SalirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    CardModule,
    GalleriaModule,
    MenuModule,
    MessageModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
