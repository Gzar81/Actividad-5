import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  miFormulario: FormGroup;

  constructor(){    //recibe un {objeto con todo el contenido de los campos del formulario}, y un [array de validaciones] 
    this.miFormulario = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.maxLength(3)
      ])
    }, [])

    this.arrUsuarios = [
      {name: "Julia", email: "Julia@gmail.com", age: 18},
      {name: "Juan", email: "JuanGomez@hotmail.com", age: 37}
    ]

  }
  arrUsuarios: any[] = [];


  recogerDatosForm(){
    let usuario = this.miFormulario.value;
    this.arrUsuarios.push(usuario)
         
  }
}
