import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { mdTransitionAnimation } from '@ionic/angular';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public republicasArray = [];

  constructor( public searchService: SearchService, public router: Router) {}

  ngOnInit() {
    this.getRepublicas();
  }

    getRepublicas(){
      this.searchService.getListRepublics().subscribe ( (res) => {
        this.republicasArray = res;
      });
    }

    public irParaRepublica(idRepublic:number){
      this.searchService.getRepublic(idRepublic).subscribe( (res )=>{
        let republic = (res);
        localStorage.setItem('republic', republic);
        this.router.navigate(['/republica1', {'republica.id': idRepublic}]);
      })
    }

}
