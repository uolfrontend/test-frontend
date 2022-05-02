import { Component, Input } from '@angular/core';
export interface ButtonType {
  text: string,
  type?: string,
  width?: string,
  version?: string,
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean = false
  @Input() button: ButtonType = {
    text: '',
    type: 'text',
  }
}
