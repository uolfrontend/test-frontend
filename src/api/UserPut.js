import axios from 'axios';
import '../css/reset.css';
import '../css/style.css';
import Swal from 'sweetalert2'
export const userPut = (data, usuario) =>{
  axios.put(`http://localhost:3002/customers/${usuario}`, data)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      type: 'success',
      title: `Usuário ${data.name} atualizado!`
    }).then(()=>{
      window.location.href = '/';
    })
    
  }).catch(()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao atualizar o usuário!',
    })
  })
}