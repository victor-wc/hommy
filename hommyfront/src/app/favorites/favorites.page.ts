import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  imagem: string = "../assets/casa.jpg";
  descricao: string = '2 quartos e sala de jogos';
  nome: string = 'Rogério';
  imagemRating: string = "../assets/rating.png";
  endereco: string = 'Rua Prudente de Morais, 32, Ipanema';
  rating: string = '4,580';
  
  endereco2: string = 'Rua Prof. Sabóia Ribeirom 103, Leblon';
  rating2: string = '4,715';
  nome2: string = 'Francisco';
  descricao2: string = '3 quartos e 1 vaga para carro';
  imagemRating2: string = "../assets/rating.png";
  imagem2: string = "../assets/casa1.jpg";
  constructor() { }

  handleButtonEvent(event:any){
    console.log(event);
  }

  ngOnInit() {
  }

}
