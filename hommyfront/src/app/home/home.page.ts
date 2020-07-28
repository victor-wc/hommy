import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { mdTransitionAnimation } from '@ionic/angular';

class Republica {
  endereco: string;
  rating: string;
  nome: string;
  descricao: string;
  imagem: string;
  imagemRating: string;
  router: string;


  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  republicas: Republica[];

  
  constructor() { }

  ngOnInit() {
    this.republicas = [
      
      {
      endereco: 'Rua Dona Mariana',
      rating: '4,917',
      nome: 'Renato',
      descricao: 'Possui 4 quartos e vaga para carro',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/quarto.jpg",
      router: "/republica1"


    },
    
    {
      endereco: 'Rua Siqueira Campos',
      rating: '4,815',
      nome: 'Victor',
      descricao: 'Piscina e vaga para carro',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/quarto2.jpg",
      router: "/republica2"
    }
    
  ];



  }

}
