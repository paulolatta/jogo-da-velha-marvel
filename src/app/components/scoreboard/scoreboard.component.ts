import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../services/hero';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {
  @Input() player: any | undefined | null;
  @Input() points: number = 0;
}
