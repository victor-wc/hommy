import { Component, OnInit } from '@angular/core';

class Republica {
  endereco: string;
  rating: string;
  nome: string;
  descricao: string;
  imagem: string;
  imagemRating: string;


  
}


@Component({
  selector: 'app-republica1',
  templateUrl: './republica1.page.html',
  styleUrls: ['./republica1.page.scss'],
})
export class Republica1Page implements OnInit {
  republicas: Republica[];
  constructor() { }

  ngOnInit() {
    this.republicas = [
      
      {
      endereco: 'Voluntários da Pátria, 105, Botafogo',
      rating: '4,917',
      nome: 'Renato',
      descricao: 'Possui 4 quartos e vaga para carro',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/quarto.jpg"


    }
    
  ];

  }

}
