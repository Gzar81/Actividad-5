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
  buttonSubmitTouched: boolean = false;

  constructor() {
    this.miFormulario = new FormGroup({
      title: new FormControl('', [
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
      date: new FormControl('', [
        Validators.required
      ])
    }, [])

    this.arrNews = [
      { title: "MK SERVERS DOWN", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFmSvkLdaUAEjSKZ.jpg?w=400&func=cover&ci_url_encoded=1", text: "We're aware players are currently unable to connect to servers in Mortal Kombat 11 and can confirm this is being investigated. We'll share an update here when this issue has been resolved. We appreciate your patience.", date: "2023-02-12" },
      { title: "WE ARE BACK ONLINE", url: "https://cdn.taggbox.com/v7/https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFiMXQMZVQAAYvLj.jpg?w=400&func=cover&ci_url_encoded=1", text: " All platforms are now back online. If players resume a previous MK11 session from a standby state on consoles, they may need to relaunch the game to connect.", date: "2023-02-13" }
    ]

  }
  arrNews: News[] = [];


  recogerDatosForm() {

    this.buttonSubmitTouched = true;

    if (this.miFormulario.valid) {
      let news = this.miFormulario.value;
      this.arrNews.push(news);
      this.miFormulario.reset(this.buttonSubmitTouched = false);
    }

  }
  titleRequiredError() {

    const title = this.miFormulario.controls['title'];

    return (title.touched || this.buttonSubmitTouched) && title.hasError('required');
  }

  mintitleLengthError() {
    const title = this.miFormulario.controls['title'];

    return title.dirty && title.hasError('minlength');
  }

  maxtitleLengthError() {
    const title = this.miFormulario.controls['title'];

    return title.dirty && title.hasError('maxlength');
  }

  urlRequiredError() {
    const url = this.miFormulario.controls['url'];

    return (url.touched || this.buttonSubmitTouched) && url.hasError('required');
  }
  urlPatternError() {
    const url = this.miFormulario.controls['url'];

    return url.dirty && url.hasError('pattern');
  }

  textRequiredError() {

    const text = this.miFormulario.controls['text'];

    return (text.touched || this.buttonSubmitTouched) && text.hasError('required');
  }

  mintextLengthError() {
    const text = this.miFormulario.controls['text'];

    return text.dirty && text.hasError('minlength');
  }

  maxtextLengthError() {
    const text = this.miFormulario.controls['text'];

    return text.dirty && text.hasError('maxlength');
  }

  dateRequiredError() {
    const date = this.miFormulario.controls['date'];

    return (date.touched || this.buttonSubmitTouched) && date.hasError('required');
  }

  dateCurrentError() {
    const date = this.miFormulario.controls['date'].value;
    const currentDate = new Date().toISOString().substring(0, 10);
    const invalidDate = date !== currentDate;
    this.miFormulario.controls['date'].setErrors(invalidDate ? { 'invalidDate': true } : null);
    return (this.miFormulario.controls['date'].dirty || this.buttonSubmitTouched) && invalidDate;
  }



}
