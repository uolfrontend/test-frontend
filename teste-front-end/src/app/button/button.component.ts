import { Component, Input, OnInit } from '@angular/core';
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
export class ButtonComponent implements OnInit {
  @Input() button: ButtonType = {
    text: '',
    type: 'text',
  }
  constructor() { }

  ngOnInit(): void { }
}
