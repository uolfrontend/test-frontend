import { Component, OnInit } from '@angular/core';
import { ButtonType } from '../button/button.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  dataButton: ButtonType[] = [
    { text: 'Criar', type: 'submit', width: '130px', version: 'filled' },
    { text: 'Voltar', type: 'text', width: '130px' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
