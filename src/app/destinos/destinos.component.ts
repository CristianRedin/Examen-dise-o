import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos',
  standalone: false,
  
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.scss'
})
export class DestinosComponent {
  products = [
    {
      name: 'Vilcabamba',
      price: 120,
      inventoryStatus: 'Disponible',
      image:
        'https://i0.wp.com/cronica.com.ec/wp-content/uploads/2021/05/vilcabamba.jpg?fit=800%2C400&ssl=1',
    },
    {
      name: ' Otavalo',
      price: 100,
      inventoryStatus: 'Disponible',
      image:
        'https://www.ailola.com/content/images/2021/12/traditional-textiles-otavalo.jpg',
    },
    {
      name: 'Montañita',
      price: 250,
      inventoryStatus: 'Disponible',
      image:
        'https://radiomitre.cienradios.com/resizer/v2/6SNNKX6FQNBQVNY4DNZFO4YA4I.jpg?auth=6422155106695872f3e72f60dbc466ddd597c011f4ecb598c8b31e9a6cb42b91&width=800&height=400',
    },
    {
      name: 'Parque Nacional Cotopaxi',
      price: 140,
      inventoryStatus: 'Disponible',
      image:
        'https://www.metroecuador.com.ec/resizer/v2/PQYEWRXXPREYRJ46M7JCR34EHM.jpg?auth=aa48ac4079d6d076673388e5880a271e94e1c560135ec79f23e2eb19a25385b2&width=800&height=400&smart=true',
    },
    {
      name: 'Baños de Agua Santa',
      price: 100,
      inventoryStatus: 'Disponible  ',
      image:
        'https://www.metroecuador.com.ec/resizer/v2/K2YLXOYVY5GZXKKYMFZO3WC4XE.jpg?auth=9d2aa68b057762abd488e0402ed29efaf0575979a2e4c808b2f8207b1e2efa15&width=800&height=400&smart=true',
    },
    {
      name: 'Islas Galápagos',
      price: 500,
      inventoryStatus: 'Disponible  ',
      image:
        'https://notimundo.com.ec/wp-content/uploads/2019/10/galapagos.jpg',
    },
   
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3, 
      numScroll: 1,
    },
    {
      breakpoint: '980px',
      numVisible: 2, 
      numScroll: 1,
    },
    {
      breakpoint: '660px',
      numVisible: 1, 
      numScroll: 1,
    },
  ];


  getSeverity(
    status: string
  ): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
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
