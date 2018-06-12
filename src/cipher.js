//window.cipher = {


  //Para cifrar el mensaje
  const cifrarMensaje=()=> {
    //Captar mensaje
    let mensaje = document.getElementById('myMessage').value;
    //Captar n, numero fijo para cifrar
    let offset = document.getElementById('offSet').value;
    //Variables para llevar a cabo el cifrado
    let cifrado="";
    let cifradoCesar = 0;

  //For para recorrer el mensaje captado
      for(let i=0; i<mensaje.length; i++){

    //Obtener el número del codigo ASCII de cada letra cifrada
     // Para mayusculas
        if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90 ) {
          cifradoCesar = (mensaje.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
        }
        // Para minusculas
        else if(mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
          cifradoCesar=(mensaje.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
        }
        // Para el espacio
       else if(mensaje.charCodeAt(i) == 32) {
          cifradoCesar=(mensaje.charCodeAt(i));
        }
        //Para los caracteres ASCII 33 al 64
        else if(mensaje.charCodeAt(i) >= 33 && mensaje.charCodeAt(i) <= 64){
          cifradoCesar = (mensaje.charCodeAt(i));
        }
        //Para los caracteres ASCII 123 al 126
        else if(mensaje.charCodeAt(i) >= 123 && mensaje.charCodeAt(i) <= 170){
          cifradoCesar = (mensaje.charCodeAt(i));
        }

        // Obtener la letra cifrada
        let mensajeCifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras cifradas, para formar la palabra cifrada
        cifrado+=mensajeCifrado;
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
        if(myMessage2.charCodeAt(i) >= 65 && myMessage2.charCodeAt(i) <= 90){
          cifradoCesar=(myMessage2.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;


        } else if (myMessage2.charCodeAt(i) >= 97 && myMessage2.charCodeAt(i) <= 122){
          cifradoCesar=(myMessage2.charCodeAt(i) +97 + parseInt(offset)) % 26 + 97;
        }

        // Para el espacio
        else if(myMessage2.charCodeAt(i) == 32) {
          cifradoCesar=(myMessage2.charCodeAt(i));
        }

        //Para los caracteres ASCII 33 al 64
        else if(myMessage2.charCodeAt(i) >= 33 && myMessage2.charCodeAt(i) <= 64){
          cifradoCesar = (myMessage2.charCodeAt(i));
        }

        //Para los caracteres ASCII 123 al 126
        else if(myMessage2.charCodeAt(i) >= 123 && myMessage2.charCodeAt(i) <= 170){
          cifradoCesar = (myMessage2.charCodeAt(i));
        }


    // Obtener la letra descifrada
        let mensajeDescifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras descifradas
        descifrado+=mensajeDescifrado;
        console.log(descifrado);
      }
      return document.getElementById('myMessage').value = descifrado;
  }




//};
