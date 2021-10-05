<h3 class="page-header">
    <img src="assets/img/icon/user.png"> Painel de clientes</h3><hr>


<div class="justify-content" style="justify-content: space-between!important; display: flex;">
    <div>
        <p class="text-secondary"><strong>Novo Usuário</strong></p>
        <p class="text-secondary">Escolha um cliente para visualizar os detalhes</p>
    </div>
    <div class="btn-newCustomers">
        <a class="btn btn-warning" href="?c=customers&a=addCustomers">Cadastrar</a>                
    </div>
</div>

  
<?php foreach($this->model->Listar() as $r): ?>    
    <div id="table-customers">            
        <div class="d-flex justify-content">
            <div class="col ">
                <strong><?php echo $r->name;?></strong>
                <br><?php echo $r->email;?>
            </div>
            <div class="col">
                <strong><?php echo $r->id;?></strong>
                <br><?php echo $r->phone;?>
            </div>
            <div class="col">
                <p><?php echo $r->status; ?></p>
            </div>                       
            <div class="btn-editCustomers">
                <a class="btn btn-outline-warning" href="?c=customers&a=Crud&id=<?php echo $r->id; ?>">Editar</a>
            </div>                                           
        </div> 
    </div>            
<?php endforeach; ?> 
    <style type="text/css">
         #table-customers .d-flex {
            border: 1px solid #e5e5e5;
            margin-top: 10px;
            padding: 10px;
            align-items: flex-end;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
         }

         #table-customers p  {
            color: #8D8D8D;
         }
         #table-customers .col {
            color: #8D8D8D;
         }

         #table-customers strong {
            font-weight: 500;
         }

         .page-header {
            margin-top: 60px;
            margin-bottom: 30px;
            font-size: 24px;
         }

         .page-header img {
            width: 24px;
            margin-top: -5px;
         }

         .btn-newCustomers {
            align-self: center;
         }

      </style>       

