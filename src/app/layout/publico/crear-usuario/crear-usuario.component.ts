import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {
  value!: string;
  placeholder = 'Angular';
}
