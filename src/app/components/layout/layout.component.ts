import { Component, Input } from '@angular/core';

import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class LayoutComponent {
  @Input() title: string = 'Bem vindo';

}
