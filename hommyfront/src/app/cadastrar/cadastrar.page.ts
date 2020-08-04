import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  registerForm: FormGroup;
  photo: SafeResourceUrl;

  constructor(public formbuilder: FormBuilder, private sanitizer: DomSanitizer) {
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

  async takePicture(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
