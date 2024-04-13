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
  @Output() onClick = new EventEmitter<any>();

  internalClick(event: any): void {
    this.onClick.emit(event)
  }
}
