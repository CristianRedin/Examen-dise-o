import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items = [
    { label: 'Menu', icon: 'pi pi-home',  routerLink: '/home' },
    { label: 'About', icon: 'pi pi-info', routerLink: '/home' },
    { label: 'Contacto', icon: 'pi pi-phone', routerLink: '/contacto'},
    {label:  'Mas destinos',    icon : 'pi pi-globe',  routerLink: '/destinos'},
    {label:  'Salir',    icon : 'pi pi-sign-out',  routerLink: '/salir'}
  ];
}

