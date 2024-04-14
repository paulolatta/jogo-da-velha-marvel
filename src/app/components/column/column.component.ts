import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { ToastComponent } from "../toast/toast.component";

@Component({
    selector: 'app-column',
    standalone: true,
    templateUrl: './column.component.html',
    styleUrl: './column.component.scss',
    imports: [ToastComponent]
})
export class ColumnComponent {
  @Input() column: {name: string, src: string | null, available: boolean} | undefined;
  @Output() onClick = new EventEmitter<string>();
  @ViewChild('mensagem') mensagem!: ToastComponent;

  onClicked(): void {
    if (this.column && this.column.available === true) {
      this.onClick.emit(this.column.name)
    } else {
      this.mensagem.showToast('Este campo não está disponível, por favor selecione outro campo.');
    }
  }
}
