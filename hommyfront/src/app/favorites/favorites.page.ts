import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  republicas;

  constructor() { }

  handleButtonEvent(event:any){
    console.log(event);
  }

  ngOnInit() {
    this.republicas=[
      {
      imagem: "../assets/casa.jpg",
      descricao: '2 quartos e sala de jogos',
      nome: 'Rogério',
      imagemRating: "../assets/rating.png",
      endereco: 'Rua Prudente de Morais, 32, Ipanema',
      rating: '4,580'
      },
      
      {
      endereco: 'Rua Prof. Sabóia Ribeirom 103, Leblon',
      rating: '4,715',
      nome: 'Francisco',
      descricao: '3 quartos e 1 vaga para carro',
      imagemRating: "../assets/rating.png",
      imagem: "../assets/casa1.jpg"
      }
    ]
  }

}
