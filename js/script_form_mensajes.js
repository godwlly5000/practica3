const enviar=document.getElementById("btnEnviar");
const nombre=document.getElementById("txtNombre");
const mensaje=document.getElementById("txtComentario");

enviar.addEventListener('click',function(){
//utilizando el PI Fetch
      fetch('http://localhost/app_web/servidor_v3/php/script_form_mensajes.php',{
          method:'POST',
          headers:{
              "Content-type":"application/json; charset=utf-8"
          },
          body:JSON.stringify({
              _nombre:nombre.value,
              _comentario:mensaje.value
          })
      })
      .then(function(respuesta){
          respuesta.json();
      })
      .then(function(json){
          console.log(json);
      })
      .catch(function(error){
          console.error("ERROR: ",error);
      });
});