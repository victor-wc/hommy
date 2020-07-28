import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {
     this.registerForm = this.formbuilder.group({
       name: [null, [Validators.required,]],
       password: [null, [Validators.required, Validators.minLength(8)]],
       confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
       email: [null,[Validators.email, Validators.required]],
       status: [null, [Validators.required]],
    });
  }
  ngOnInit() {}

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

}
