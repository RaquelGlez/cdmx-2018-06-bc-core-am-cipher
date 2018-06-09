window.cipher = {
  // ...

  //Para cifrar el mensaje
  const cifrarMensaje=()=> {
    //Captar mensaje
    let mensaje = document.getElementById('myMessage').value;
    //Captar n, numero fijo para cifrar
    let offset = document.getElementById('offSet').value;
    //Variables para llevar a cabo el cifrado
    let cifrado="";
    let cifradoCesar = 0;


      for(let i=0; i<mensaje.length; i++){

    //Obtener el número del codigo ASCII de cada letra cifrada
        if(mensaje.charCodeAt(i) < 97) {
          cifradoCesar = (mensaje.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
        } else {
          cifradoCesar=(mensaje.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
        }

        // Obtener la letra cifrada
        let mensajeCifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras cifradas, para formar la palabra cifrada
        cifrado+=mensajeCifrado
      }
    //Mostrar el mensaje cifrado en el output
      return document.getElementById('myMessage2').value = cifrado;
  }


  //Para descifrar el mensaje
  const descifrarMensaje=()=> {
    //Captar mensaje
    let myMessage2 = document.getElementById('myMessage2').value;
    //Captar n, numero fijo para cifrar
    let offset = document.getElementById('offSet').value;
    //Variables para llevar a cabo el cifrado
    let descifrado="";
    let cifradoCesar = 0;


      for(let i=0; i<myMessage2.length; i++){

    //Obtener el número del codigo ASCII de cada letra descifrada
        if(myMessage2.charCodeAt(i) < 97){
          cifradoCesar=(myMessage2.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
        } else {
          cifradoCesar=(myMessage2.charCodeAt(i) + 97 - parseInt(offset)) % 26 + 97;
        }

    // Obtener la letra descifrada
        let mensajeDescifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras descifradas
        descifrado+=mensajeDescifrado
      }
      return document.getElementById('myMessage').value = descifrado;
  }


};
