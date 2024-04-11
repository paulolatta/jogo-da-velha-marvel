import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [LayoutComponent]
})
export class GameComponent {
  title: string = 'Game Play'

}
