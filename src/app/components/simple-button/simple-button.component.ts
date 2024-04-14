import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.scss'
})
export class SimpleButtonComponent {
  @Input() label: string = '';
  @Output() selected = new EventEmitter<object>();

  internalClick(event: object): void {
    this.selected.emit(event)
  }
}
