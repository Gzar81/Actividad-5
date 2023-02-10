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
        Validators.maxLength(20)
      ]),
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(300)
      ]),
      date: new FormControl('',[
        Validators.required,
        Validators.pattern(/^\d{2}\/\d{2}\/\d{2}$/)
      ])
    }, [])

    this.arrUsuarios = [
      {title: "MK SERVERS DOWN", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFmSvkLdaUAEjSKZ.jpg?w=400&func=cover&ci_url_encoded=1", text: "We're aware players are currently unable to connect to servers in Mortal Kombat 11 and can confirm this is being investigated. We'll share an update here when this issue has been resolved. We appreciate your patience.", date: "14/02/23"},
      {title: "WE ARE BACK ONLINE", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFiMXQMZVQAAYvLj.jpg?w=400&func=cover&ci_url_encoded=1", text: " All platforms are now back online. If players resume a previous MK11 session from a standby state on consoles, they may need to relaunch the game to connect.", date: "15/02/23"}
    ]

  }
  arrUsuarios: News[] = [];


  recogerDatosForm(){
    let usuario = this.miFormulario.value;
    this.arrUsuarios.push(usuario);
    this.miFormulario.reset();
         
  }
  titleRequiredError() {

    const title = this.miFormulario.controls['title'];

    return title.touched && title.hasError('required');
  }

  mintitleLengthError(){
    const title = this.miFormulario.controls['title'];

    return title.touched && title.hasError('minlength');
  }

  maxtitleLengthError(){
    const title = this.miFormulario.controls['title'];

    return title.touched && title.hasError('maxlength');
  }

  urlRequiredError(){
    const url = this.miFormulario.controls['url'];

    return url.touched && url.hasError('required');
  }
  urlPatternError(){
    const url = this.miFormulario.controls['url'];

    return url.touched && url.hasError('pattern');
  }

  textRequiredError() {

    const text = this.miFormulario.controls['text'];

    return text.touched && text.hasError('required');
  }

  mintextLengthError(){
    const text = this.miFormulario.controls['text'];

    return text.touched && text.hasError('minlength');
  }

  maxtextLengthError(){
    const text = this.miFormulario.controls['text'];

    return text.touched && text.hasError('maxlength');
  }

  dateRequiredError(){
    const date = this.miFormulario.controls['date'];

    return date.touched && date.hasError('required');
  }
  datePatternError(){
    const date = this.miFormulario.controls['date'];

    return date.touched && date.hasError('pattern');
  }

}
