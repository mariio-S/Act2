import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface ConceptoAngular {
  nombre: string;
  descripcion: string;
  visible: boolean;
}

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.css',
})
export class EjemploComponent {
  conceptos: ConceptoAngular[] = [
    {
      nombre: 'Componente',
      descripcion: 'Unidad básica de Angular que combina lógica (TypeScript), plantilla (HTML) y estilos (CSS).',
      visible: false
    },
    {
      nombre: 'Módulo',
      descripcion: 'Agrupa componentes y otros elementos relacionados. El módulo principal suele ser AppModule.',
      visible: false
    },
    {
      nombre: 'Data binding',
      descripcion: 'Conecta los datos de la lógica con la vista, permitiendo mostrar y actualizar información fácilmente.',
      visible: false
    },
    {
      nombre: 'Directiva',
      descripcion: 'Instrucción que se añade al HTML para modificar su comportamiento, como *ngFor o *ngIf.',
      visible: false
    }
  ];

  toggleDescripcion(concepto: ConceptoAngular) {
    concepto.visible = !concepto.visible;
  }
}
