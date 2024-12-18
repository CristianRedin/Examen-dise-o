import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Asegúrate de que sea styleUrls, no styleUrl
})
export class HomeComponent {
  products = [
    { name: 'Product 1', inventoryStatus: 'In Stock' },
    { name: 'Product 2', inventoryStatus: 'Out of Stock' },
    { name: 'Product 3', inventoryStatus: 'Low Stock' }
  ];

  // Definir la propiedad 'responsiveOptions' para la configuración de un componente como un slider o grid
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  // Función para obtener el estado de severidad según el inventario del producto
  getSeverity(inventoryStatus: string): string {
    switch (inventoryStatus) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
  
}

