import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../services/hero';
import { LineComponent } from "../../components/line/line.component";
import { ScoreboardComponent } from "../../components/scoreboard/scoreboard.component";
import { SimpleButtonComponent } from "../../components/simple-button/simple-button.component";

@Component({
    selector: 'app-play',
    standalone: true,
    templateUrl: './play.component.html',
    styleUrl: './play.component.scss',
    imports: [ScoreboardComponent, LineComponent, SimpleButtonComponent]
})
export class PlayComponent implements OnInit {
  @Input() players: Array<Hero | null> | undefined;

  x = 1;
  o = 0;
  COL_1 = 0;
  COL_2 = 1;
  COL_3 = 2;
  COL_4 = 3;
  COL_5 = 4;
  COL_6 = 5;
  COL_7 = 6;
  COL_8 = 7;
  COL_9 = 8;

  velha: boolean = false;
  gameEnded: boolean =  false;
  winner: string | undefined | null;
  playerOne: string | undefined = '';
  playerTwo: string | undefined = '';
  pointsPlayers: Array<number> = [0, 0];
  currentPlayer: string | undefined = '';

  columnsLine: Array<{name: string, src: string | null, available: boolean, value: number | null}> = [
    {name: 'column1', src: null, available: true, value: null},
    {name: 'column2', src: null, available: true, value: null},
    {name: 'column3', src: null, available: true, value: null},
    {name: 'column4', src: null, available: true, value: null},
    {name: 'column5', src: null, available: true, value: null},
    {name: 'column6', src: null, available: true, value: null},
    {name: 'column7', src: null, available: true, value: null},
    {name: 'column8', src: null, available: true, value: null},
    {name: 'column9', src: null, available: true, value: null},
  ];

  ngOnInit(): void {
    this.startValues();
  }

  startValues(): void {
    if (this.players) {
      let randomNum = Math.random();
      if (randomNum < 0.5 ) {
        this.playerOne = this.players[0]?.name;
        this.playerTwo = this.players[1]?.name
      } else {
        this.playerOne = this.players[1]?.name;
        this.playerTwo = this.players[0]?.name
      }
    }

    this.currentPlayer = this.playerOne;
  }

  changePlayer(): void {
    if (this.players) {
      const indiceJogadorAtual = this.players.findIndex(jogador => jogador?.name === this.currentPlayer);
      const proximoIndice = (indiceJogadorAtual + 1) % this.players.length;
      this.currentPlayer = this.players[proximoIndice]?.name;
    }
  }

  checkColumns(a: number | null, b: number | null, c: number | null): boolean {
    const vencedor = (a !== null) && (a === b && b === c) ? (a === this.x ? this.playerOne : this.playerTwo) : null;

    if (vencedor) {
      this.winner = vencedor;
      return true;
    }
    return false;
  }

  isEmpate(): boolean {
    return this.columnsLine.every(coluna => coluna.value !== null);
  }

  endGame(): void {
    if (
      this.checkColumns(this.columnsLine[this.COL_1].value, this.columnsLine[this.COL_2].value, this.columnsLine[this.COL_3].value) ||
      this.checkColumns(this.columnsLine[this.COL_4].value, this.columnsLine[this.COL_5].value, this.columnsLine[this.COL_6].value) ||
      this.checkColumns(this.columnsLine[this.COL_7].value, this.columnsLine[this.COL_8].value, this.columnsLine[this.COL_9].value) ||

      this.checkColumns(this.columnsLine[this.COL_1].value, this.columnsLine[this.COL_4].value, this.columnsLine[this.COL_7].value) ||
      this.checkColumns(this.columnsLine[this.COL_2].value, this.columnsLine[this.COL_5].value, this.columnsLine[this.COL_8].value) ||
      this.checkColumns(this.columnsLine[this.COL_3].value, this.columnsLine[this.COL_6].value, this.columnsLine[this.COL_9].value) ||

      this.checkColumns(this.columnsLine[this.COL_1].value, this.columnsLine[this.COL_5].value, this.columnsLine[this.COL_9].value) ||
      this.checkColumns(this.columnsLine[this.COL_3].value, this.columnsLine[this.COL_5].value, this.columnsLine[this.COL_7].value)
    ) {
      const indexPlayerWinner: any = this.players?.findIndex(hero => hero?.name === this.winner);
      this.pointsPlayers[indexPlayerWinner] = this.pointsPlayers[indexPlayerWinner] + 1;
      this.gameEnded = true;

    } else if (this.isEmpate()) {
      this.velha = true;
      this.winner = 'DEU VELHA!!';
      this.gameEnded = true;
    }
  }

  selectedColumn(event: string): void {
    this.columnsLine.forEach((colum, index) => {
      if (colum.name === event) {
        this.columnsLine[index].available = false;

        if (this.playerOne === this.currentPlayer) {
          this.columnsLine[index].src = 'assets/images/x.png';
          this.columnsLine[index].value = this.x;
        } else {
          this.columnsLine[index].src = 'assets/images/o.png';
          this.columnsLine[index].value = this.o;
        }

        this.changePlayer();
        this.endGame();
      }
    })
  }

  restart(): void {
    this.columnsLine.forEach((each) => {
      each.available = true;
      each.value = null;
      each.src = null;
    })

    this.winner = null;
    this.playerOne = '';
    this.playerTwo = '';
    this.currentPlayer = '';
    this.startValues();
    this.gameEnded = false;
  }
}
