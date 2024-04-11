import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LayoutComponent]
})
export class HomeComponent {
  constructor(private route: Router) {}

  playGame(): void {
    this.route.navigate(['gameplay']);
  }
}
