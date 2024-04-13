import { Component, ViewChild } from '@angular/core';

import { ApiMarvelService } from '../../services/api-marvel.service';
import { Hero } from '../../services/hero';
import { LayoutComponent } from "../../components/layout/layout.component";
import { SelectPlayerComponent } from "../../components/select-player/select-player.component";
import { SimpleButtonComponent } from "../../components/simple-button/simple-button.component";
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [LayoutComponent, SelectPlayerComponent, SimpleButtonComponent, ToastComponent]
})
export class GameComponent {
  title: string = 'Game Play'
  playerOne: Hero | undefined | null;
  playerTwo: Hero | undefined | null;

  @ViewChild('mensagem') mensagem!: ToastComponent;

  constructor(private apiMarvel: ApiMarvelService) {}

  async searchPlayers(heroName: string): Promise<void> {
    if (!this.playerOne) {
      this.playerOne = await this.searchPlayer(heroName);
    } else {
      this.playerTwo = await this.searchPlayer(heroName);
    }
  }

  searchPlayer(heroName: string): any {
    return this.apiMarvel.getHero(heroName).then((res: {data: {results: Array<any>}}) => {
      if (res.data.results[0]) {
        return res.data.results[0];
      } else {
        this.mensagem.showToast('Sua busca não retornou resultados, procure por outro herói.');
      }
    }).catch((res: any) => {
      this.mensagem.showToast('Sua busca não retornou resultados, procure por outro herói.');
    });
  }

  removePlayer(event: string): void {
    if (this.playerOne?.name === event) {
      this.playerOne = null
    } else {
      this.playerTwo = null;
    }
  }

  playGame(): void {
    let randomNum = Math.random();
    let chosenPlayer = randomNum < 0.5 ? this.playerOne?.name : this.playerTwo?.name;
  }
}
