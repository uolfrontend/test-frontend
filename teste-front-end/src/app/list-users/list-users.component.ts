import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { ButtonType } from '../button/button.component';

export interface CostumerType {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  providers: [LocalStorageService]
})
export class ListUsersComponent implements OnInit {

  constructor(private service: LocalStorageService) { }

  status: any = {
    active: 'Ativo',
    inactive: 'Inativo',
    waiting: 'Aguardando ativação',
    disabled: 'Desativado',
  }

  editClient: ButtonType = { text: 'Editar', width: '150px' }
  newClient: ButtonType = { text: 'Novo cliente', version: 'filled' }

  customers: CostumerType[] = [
    {
      "name": "Camila Souza",
      "email": "camila.souza@email.com",
      "id": "512.536.530-03",
      "phone": "(11) 93463-2347",
      "status": "active"
    },
    {
      "name": "Pedro Ferreira",
      "email": "peferreira@email.com",
      "id": "397.553.820-11",
      "phone": "(11) 95529-5678",
      "status": "inactive"
    },
    {
      "name": "Marcela Silva",
      "email": "masilva@email.com",
      "id": "921.818.210-20",
      "phone": "(11) 93470-3391",
      "status": "waiting"
    },
    {
      "name": "Carlos Ferraz",
      "email": "carlosferraz@email.com",
      "id": "533.278.870-39",
      "phone": "(11) 96744-0233",
      "status": "disabled"
    }
  ]

  ngOnInit(): void {
  /**
   * Verifica se o localstorage esta vazio
   */
    if (!this.service.hasStorage()) {
      this.initialData()
    }
    this.getAllClients()
  }

  /**
   * Pega o conteudo de costumar e salva os dados iniciais no localstoraga
   */
  initialData() {
    this.customers.forEach((data: { id: string; }) => {
      this.service.set(data.id, data)
    })
  }

  /**
   * Pega tudo que tiver no locastorage e salva em customers
   */
  getAllClients() {
    this.service.getAll().forEach((client: any, i: number) => {
      this.customers[i] = JSON.parse(client.value)
    });
  }
}
