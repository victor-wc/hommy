import { Component, OnInit } from '@angular/core';
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
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  republicas: Republica[];

  constructor() { }

  ngOnInit() {
    this.republicas = [
      
      {
      endereco: 'Rua Prudente de Morais, 32, Ipanema',
      rating: '4,580',
      nome: 'Rogério',
      descricao: '2 quartos e sala de jogos',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/casa.jpg",
      router: "/republica1"


    },
    
    {
      endereco: 'Rua Prof. Sabóia Ribeirom 103, Leblon',
      rating: '4,715',
      nome: 'Francisco',
      descricao: '3 quartos e 1 vaga para carro',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/casa1.jpg",
      router: "/republica2"
    }
    
  ];
  }

}
