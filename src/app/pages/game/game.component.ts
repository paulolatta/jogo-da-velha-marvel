import { Component, ViewChild } from '@angular/core';

import { ApiMarvelService } from '../../services/api-marvel.service';
import { Hero } from '../../services/hero';
import { LayoutComponent } from "../../components/layout/layout.component";
import { PlayComponent } from "../play/play.component";
import { SelectPlayerComponent } from "../../components/select-player/select-player.component";
import { SimpleButtonComponent } from "../../components/simple-button/simple-button.component";
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [LayoutComponent, SelectPlayerComponent, SimpleButtonComponent, ToastComponent, PlayComponent]
})
export class GameComponent {
  title: string = 'Game Play'
  playing: boolean = false;
  players: Array<Hero | null> = [];

  @ViewChild('mensagem') mensagem!: ToastComponent;

  constructor(private apiMarvel: ApiMarvelService) {}

  async searchPlayers(heroName: string): Promise<void> {
    const player = await this.searchPlayer(heroName);

    if (!this.players[0]) {
      this.players[0] = player;
    } else {
      this.players[1] = player
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
    this.players.forEach((hero: Hero | null, index: number) => {
      if (hero?.name === event) {
        this.players[index] = null;
      }
    });
  }

  playGame(): void {
    this.title = 'Jogando'
    this.playing = true;
  }
}
