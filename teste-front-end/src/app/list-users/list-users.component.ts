import { Component, OnInit } from '@angular/core';
import { ButtonType } from '../button/button.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  status: any = {
    active: 'Ativo',
    inactive: 'Inativo',
    waiting: 'Aguardando ativação',
    disabled: 'Desativado',
  }

  buttonData: ButtonType[] = [
    { text: 'Novo cliente', width: '150px', version: 'filled' },
    {text: 'Editar', width: '150px'}
  ]
  constructor() { }

  customers = [
    {
      "id": "512.536.530-03",
      "name": "Camila Souza",
      "email": "camila.souza@email.com",
      "phone": "(11) 93463-2347",
      "status": "active"
    },
    {
      "id": "397.553.820-11",
      "name": "Pedro Ferreira",
      "email": "peferreira@email.com",
      "phone": "(11) 95529-5678",
      "status": "inactive"
    },
    {
      "id": "921.818.210-20",
      "name": "Marcela Silva",
      "email": "masilva@email.com",
      "phone": "(11) 93470-3391",
      "status": "waiting"
    },
    {
      "id": "533.278.870-39",
      "name": "Carlos Ferraz",
      "email": "carlosferraz@email.com",
      "phone": "(11) 96744-0233",
      "status": "disabled"
    }
  ]
  ngOnInit(): void { }

}
