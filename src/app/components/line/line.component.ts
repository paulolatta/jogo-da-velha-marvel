import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ColumnComponent } from "../column/column.component";

@Component({
    selector: 'app-line',
    standalone: true,
    templateUrl: './line.component.html',
    styleUrl: './line.component.scss',
    imports: [ColumnComponent]
})
export class LineComponent {
  @Input() columnIds: Array<{name: string, src: string | null, available: boolean}> = [];
  @Output() onClick = new EventEmitter<string>();

  selectedColumn(event: string): void {
    this.onClick.emit(event);
  }
}
