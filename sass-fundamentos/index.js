let confirmar = () => {
    let confirmation = confirm("Esto es un enlace externo. Jeune Winsley no tiene control sobre el contenido de este sitio web. ¿Desea continuar?");
    
    //para consultar al profe
    confirmation ? confirmation : window.location.href = "./sass-fundamentos/pages/";
    
   
  }
  