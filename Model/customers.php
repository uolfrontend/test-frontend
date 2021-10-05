<?php
class customers
{
	
	private $pdo;

	public $id;
    public $name;
    public $email;
    public $phone;
    public $status;

	public function __CONSTRUCT()
	{
		try
		{
			$this->pdo = Database::Conectar();
		}
		catch(Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function Listar()
	{
		try
		{
			$result = array();
			$stm = $this->pdo->prepare("SELECT * FROM customers");
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_OBJ);
		}
		catch(Exception $e)
		{
			
			die($e->getMessage());
		}
	}

	public function getCustomers($id)
	{
		try
		{
			$stm = $this->pdo->prepare("SELECT * FROM customers WHERE id = ?");
			$stm->execute(array($id));
			return $stm->fetch(PDO::FETCH_OBJ);
		} catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	
	public function Eliminar($id)
	{
		try
		{
			$stm = $this->pdo
			            ->prepare("DELETE FROM customers WHERE id = ?");

			$stm->execute(array($id));
		} catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function updateCustomers($data)
	{
		try
		{
			$sql = "UPDATE customers SET
						name         = ?,
						email        = ?,
            			phone        = ?,
            			status       = ?
				    WHERE id = ?";
			
			$this->pdo->prepare($sql)
			     ->execute(
				    array(
                        $data->name,
                        $data->email,
                        $data->phone,
                        $data->status,
                        $data->id
					)
				);
		} catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function saveCustomers(customers $data)
	{
		try
		{
			$sql = "INSERT INTO customers (id,name,email,phone,status)
		        VALUES (?, ?, ?, ?, ?)";

			$this->pdo->prepare($sql)
		     ->execute(
				array(
                    $data->id,
                    $data->name,
                    $data->email,
                    $data->phone,
                    $data->status,
                )
			);
		} catch (Exception $e)
		{
			die($e->getMessage());
		}
	}
}
