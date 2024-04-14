import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Hero } from '../../services/hero';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleInputComponent } from "../simple-input/simple-input.component";

@Component({
    selector: 'app-select-player',
    standalone: true,
    templateUrl: './select-player.component.html',
    styleUrl: './select-player.component.scss',
    imports: [ReactiveFormsModule, SimpleInputComponent]
})
export class SelectPlayerComponent {
  @Input() hero: Hero | undefined | null;
  @Output() searchPlayer = new EventEmitter<string>();
  @Output() removePlayer = new EventEmitter<string>();

  heroForm = new FormGroup({
    name: new FormControl('')
  });

  onSubmit(): void {
    this.searchPlayer.emit(this.heroForm.value.name?.toString());
  }

  removeHero(): void {
    this.removePlayer.emit(this.hero?.name);
  }
}
