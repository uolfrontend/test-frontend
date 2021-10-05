<?php
require_once 'model/customers.php';

class customersController{

    private $model;

    public function __CONSTRUCT(){
        $this->model = new customers();
    }

    public function Index(){
        require_once 'view/header.php';
        require_once 'view/customer/customers.php';
    }

    public function Crud(){
        $pvd = new customers();

        if(isset($_REQUEST['id'])){
            $pvd = $this->model->getCustomers($_REQUEST['id']);
        }

        require_once 'view/header.php';
        require_once 'view/customer/customers-edit.php';
  }

    public function addCustomers(){
        $pvd = new customers();

        require_once 'view/header.php';
        require_once 'view/customer/customers-insert.php';        
    }

    public function salvarCustomers(){
        $pvd = new customers();

        if ($pvd->id = true) {
            
            $pvd->id     = $_REQUEST['id'];
            $pvd->name   = $_REQUEST['name'];
            $pvd->email  = $_REQUEST['email'];
            $pvd->phone  = $_REQUEST['phone'];
            $pvd->status = $_REQUEST['status'];

            $this->model->saveCustomers($pvd);

            header('Location: index.php');
        }

        
    }

    public function Editar(){
        $pvd = new customers();

        $pvd->id     = $_REQUEST['id'];
        $pvd->name   = $_REQUEST['name'];
        $pvd->phone  = $_REQUEST['phone'];
        $pvd->email  = $_REQUEST['email'];
        $pvd->status = $_REQUEST['status'];

        $this->model->updateCustomers($pvd);

        header('Location: index.php');
    }

    public function Eliminar(){
        $this->model->Delete($_REQUEST['id']);
        header('Location: index.php');
    }
}
