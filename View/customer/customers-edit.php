<h3 class="page-header">CPF:
    <?php echo $pvd->id != null ? $pvd->id : 'Novo Registro'; ?>
</h3>


<form id="frm-customers" action="?c=customers&a=Editar" method="post" enctype="multipart/form-data">
    <div style="width: 30%; margin-top: 60px;">
        <input type="hidden" name="id" value="<?php echo $pvd->id; ?>" onkeyup="cpfCheck(this)"/>
        <div class="form-group">
            <input type="text" name="name" value="<?php echo $pvd->name; ?>" class="form-control" placeholder="Nome" />
        </div>
        <div class="form-group">
            <input type="text" name="email" value="<?php echo $pvd->email; ?>" class="form-control" placeholder="Email"/>
        </div>
        <div class="form-group">
            <input type="text" name="phone" value="<?php echo $pvd->phone; ?>" class="form-control" placeholder="Telefone"/>
        </div>
        <div class="form-group">
            <select name="status" value="<?php echo $pvd->status; ?>" class="form-control" name="select">
                <option>Active</option>
                <option>Disabled</option>
                <option>Inactive</option>
                <option>Waiting</option>
            </select>
        </div>
    </div>
    <hr />

    <div class="text-left">
        <button class="btn btn-warning">Atualizar</button>
        <a href="index.php" class="btn btn-outline-warning">Voltar</a>
    </div>
</form>

<script>
    $(document).ready(function(){
        $("#frm-customers").submit(function(){
            return $(this).validate();
        });
    })
</script>
