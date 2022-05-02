import { Component, OnInit, ViewChild } from '@angular/core';
import { CostumerType } from '../list-users/list-users.component';
import { ButtonType } from '../button/button.component';
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from 'src/services/local-storage.service';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import validator from 'validar-telefone';
import { validate } from 'gerador-validador-cpf';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  @ViewChild('form')
  editData!: NgForm;

  status = [
    { status: 'Ativo', key: 'active' },
    { status: 'Inativo', key: 'inactive' },
    { status: 'Aguardando ativação', key: 'waiting' },
    { status: 'Desativado', key: 'disabled' }
  ];

  f = new FormGroup({
    state: new FormControl(this.status),
  });

  client!: CostumerType;

  submit: ButtonType = {
    text: 'Criar',
    type: 'submit',
    width: '130px',
    version: 'filled'
  }

  goBack: ButtonType = {
    text: 'Voltar',
    type: 'text',
    width: '130px'
  }

  constructor(
    private route: ActivatedRoute,
    private service: LocalStorageService,
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.client = this.service.get(id)
    if (id) this.submit.text = 'Editar'
  }

  onSubmit(): void {
    if (this.validPhone() && this.validCPF()) {
      this.service.set(this.editData.value.id, this.editData.value)
      alert('Usuário salvo com sucesso')
    }
  }

  validPhone() {
    if (!validator(this.editData.value.phone)) {
      alert('Numero de telefone invalido')
    }
    return validator(this.editData.value.phone)
  }

  validCPF() {
    if (!validate(this.editData.value.id)) {
      alert('Numero de CPF invalido')
    }
    return validate(this.editData.value.id)
  }
}
