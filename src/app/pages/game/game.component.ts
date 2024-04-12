import { Component, OnInit } from '@angular/core';

import { ApiMarvelService } from '../../services/api-marvel.service';
import { LayoutComponent } from "../../components/layout/layout.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [LayoutComponent]
})
export class GameComponent implements OnInit {
  title: string = 'Game Play'

  constructor(private apiMarvel: ApiMarvelService) {}

  ngOnInit(): void {
    this.teste();
  }

  // Função de teste para a API
  teste(): void {
    this.apiMarvel.getHero('A-Bomb (HAS)').subscribe((res) => {
      console.log('res: ', res);
    });
  }
}
