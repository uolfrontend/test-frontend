# Teste FrontEnd
Esta aplicação é faz parte do teste para a vaga de front-end no UOL Produtos Digitais. A aplicação mostra uma listagem de clientes e permite a criação de novo cliente.

Esse projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.1.

## Rodar o projeto
- Clone o repositório
- Dentro da pasta teste-front-end/src execute o comando npm i
- Instale o [Angular CLI](https://github.com/angular/angular-cli)
- Rode o comando `ng serve`
- A aplicação estara rodando no link [http://localhost:4200/](https://karma-runner.github.io).

## Rodar os testes unitários
- `ng test` foi utilizado o [Karma](https://karma-runner.github.io).

### Bibliotecas utilizadas
- [ Validação do cpf](https://github.com/tiagoporto/gerador-validador-cpf)
- [ Validação do telefone](https://www.npmjs.com/package/validar-telefone)

## Possiveis erros
Quando a extensão do uol `UOL Analytics Debugger 3.2.3` está ativada, pode ocorrer um comportamentos estranhos como os campos ficarem em branco. Para solucionar desabilite a extensão e limpe o localstorage
![Erro na listagem](./src/assets/screenshot/erro-lista.png)
