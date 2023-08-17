import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: [''],
      direccion: [''],
      ciudad: [''],
      pais: [''],
      preferenciasContacto: this.formBuilder.group({
        correo: [false],
        telefono: [false],
        mensajesTexto: [false]
      }),
    
      comonosConocio: [''],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  enviarRegistro() {
    if (this.registroForm.valid) {
      console.log('Registro enviado:', this.registroForm.value);
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos requeridos.');
    }
  }
}
