import axios from 'axios';
import '../css/reset.css';
import '../css/style.css';
import Swal from 'sweetalert2'
export const UserPost = (data) =>{
  axios.post("http://localhost:3002/customers", data)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      type: 'success',
      title: `Usuário ${data.name} cadastrado!`
    }).then(()=>{
      window.location.href = '/';
    })
  })
  .catch(()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Certifique-se de que não há um usuário com esse CPF cadastrado!',
    })
  })
}