document.getElementById('button').addEventListener('click', function(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Tu cita ha sido agendad, te llamaremos para confirmar hora!',
        showConfirmButton: false,
        timer: 1500
      })
})