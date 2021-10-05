<?php 
 // require_once 'model/validacao_inicial.php';
    
?>

<h3 class="page-header">
    <img src="assets/img/icon/user.png"> Painel de clientes</h3><hr>


<form id="frm-proveedor" action="?c=customers&a=salvarCustomers" method="post" enctype="multipart/form-data">
    <div style="width: 30%; margin-top: 60px;">
        <div class="form-group">      
            <input type="text" name="id" id="cpf" class="form-control" placeholder="CPF" onkeyup="cpfCheck(this)"
            onkeydown="javascript: fMasc( this, mCPF );"> <span id="cpfResponse"></span>
        </div>
        <div class="form-group">        
            <input  type="text" name="name" value="<?php echo $pvd->name; ?>" class="form-control" placeholder="Nome" />
        </div>
        <div class="form-group">        
            <input type="text" name="email" value="<?php echo $pvd->email; ?>" class="form-control" placeholder="E-mail" />
        </div>
        <div class="form-group">        
            <input type="text" name="phone" value="<?php echo $pvd->phone; ?>" class="form-control" placeholder="Telefone" 
            onkeypress="mask(this, mphone);" onblur="mask(this, mphone);"/>
        </div>
        <div class="form-group">   
            <select name="status" value="<?php echo $pvd->status; ?>" class="form-control" name="select">
              <option selected="">Active</option>
              <option>Disabled</option>
              <option>Inactive</option>
              <option>Waiting</option>
            </select>    
        </div>

        <script type="text/javascript">
            function is_cpf (c) {

              if((c = c.replace(/[^\d]/g,"")).length != 11)
                return false

              if (c == "00000000000")
                return false;

              var r;
              var s = 0;

              for (i=1; i<=9; i++)
                s = s + parseInt(c[i-1]) * (11 - i);

              r = (s * 10) % 11;

              if ((r == 10) || (r == 11))
                r = 0;

              if (r != parseInt(c[9]))
                return false;

              s = 0;

              for (i = 1; i <= 10; i++)
                s = s + parseInt(c[i-1]) * (12 - i);

              r = (s * 10) % 11;

              if ((r == 10) || (r == 11))
                r = 0;

              if (r != parseInt(c[10]))
                return false;

              return true;
          }


            function fMasc(objeto,mascara) {
            obj=objeto
            masc=mascara
            setTimeout("fMascEx()",1)
            }

              function fMascEx() {
            obj.value=masc(obj.value)
            }

            function mCPF(cpf){
            cpf=cpf.replace(/\D/g,"")
            cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
            cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
            cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
            return cpf
            }

            cpfCheck = function (el) {
                document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)
                    ? '<span style="color:green">`Válido</span>' 
                    : '<span style="color:red">Inválido</span>';
                if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
            }

            function mask(o, f) {
              setTimeout(function() {
                var v = mphone(o.value);
                if (v != o.value) {
                  o.value = v;
                }
              }, 1);
            }

            function mphone(v) {
              var r = v.replace(/\D/g, "");
              r = r.replace(/^0/, "");
              if (r.length > 10) {
                r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
              } else if (r.length > 5) {
                r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
              } else if (r.length > 2) {
                r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
              } else {
                r = r.replace(/^(\d*)/, "($1");
              }
              return r;
            }

            
        </script>

        <div class="text-left btn-section" style="display: flex; justify-content: space-between;">
            <button id="btn-add" class="btn btn-warning" style="width: 150px;">Criar</button>
            <button href="index.php" class="btn  btn-outline-warning" style="width: 150px;">Voltar</button>
        </div>
    </div>    

    <hr />

    
</form>

<script>
    $(document).ready(function(){
        $("#frm-proveedor").submit(function(){
            return $(this).validate();
        });
    })
</script>
