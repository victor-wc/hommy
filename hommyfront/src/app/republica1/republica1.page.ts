import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica1',
  templateUrl: './republica1.page.html',
  styleUrls: ['./republica1.page.scss'],
})
export class Republica1Page implements OnInit {
  imagem: string = '../assets/quarto.jpg';
  descricao: string ='Possui 4 quartos e vaga para carro';
  nome: string = 'Renato';
  imagemRating: string ='../assets/rating.png';
  endereco: string ='Voluntários da Pátria, 105, Botafogo';
  rating: string='4,917';


  constructor() { }

  handleButtonEvent(event:any){
    console.log(event);
  }

  ngOnInit() {

  }

}
