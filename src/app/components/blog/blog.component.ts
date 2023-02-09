import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  miFormulario: FormGroup;

  constructor(){    //recibe un {objeto con todo el contenido de los campos del formulario}, y un [array de validaciones] 
    this.miFormulario = new FormGroup({
      title: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      url: new FormControl('', [
        Validators.required,
        Validators.minLength(12)
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(300)
      ]),
      date: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }, [])

    this.arrUsuarios = [
      {title: "BLOOD", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFmSvkLdaUAEjSKZ.jpg?w=400&func=cover&ci_url_encoded=1", text: " All platforms are now back online. If players resume a previous MK11 session from a standby state on consoles, they may need to relaunch the game to connect.", date: "14/02/23"},
      {title: "MORTAL PUNCH", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFiMXQMZVQAAYvLj.jpg?w=400&func=cover&ci_url_encoded=1", text: "The realms couldn't hold Mortal Kombat. It quickly grew out of the realms and onto your shelves.", date: "15/02/23"}
    ]

  }
  arrUsuarios: News[] = [];


  recogerDatosForm(){
    let usuario = this.miFormulario.value;
    this.arrUsuarios.push(usuario)
         
  }
}
