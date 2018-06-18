window.cipher = {


  //Para cifrar el mensaje
  encode:(string,key)=> {

  //Variables para llevar a cabo el cifrado
    let cifrado="";
    let cifradoCesar = 0;

  //For para recorrer el mensaje captado
      for(let i=0; i<string.length; i++){

    //Obtener el número del codigo ASCII de cada letra cifrada
     // Para mayusculas
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ) {
          cifradoCesar = (string.charCodeAt(i) - 65 + parseInt(key)) % 26 + 65;
        }
        // Para minusculas
        else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
          cifradoCesar=(string.charCodeAt(i) - 97 + parseInt(key)) % 26 + 97;
        }
        // Para el espacio
       else if(string.charCodeAt(i) == 32) {
          cifradoCesar=(string.charCodeAt(i));
        }
        //Para los caracteres ASCII 33 al 64
        else if(string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64){
          cifradoCesar = (string.charCodeAt(i));
        }
        //Para los caracteres ASCII 123 al 126
        else if(string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 170){
          cifradoCesar = (string.charCodeAt(i));
        }

        // Obtener la letra cifrada
        let mensajeCifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras cifradas, para formar la palabra cifrada
        cifrado+=mensajeCifrado;
      }
    //Retornar el mensaje cifrado
      return cifrado;
  },






  //Para descifrar el mensaje
decode: (string2,key)=> {

    //Variables para llevar a cabo el cifrado
    let descifrado="";
    let cifradoCesar = 0;


    for(let i=0; i<string2.length; i++){

      //Obtener el número del codigo ASCII de cada letra descifrada
        //Para las mayusculas
    if(string2.charCodeAt(i) >= 65 && string2.charCodeAt(i) <= 90){

        cifradoCesar=(string2.charCodeAt(i) + 65 - parseInt(key)) % 26 + 65;

        //Para las minusculas

      } else if (string2.charCodeAt(i) >= 97 && string2.charCodeAt(i) <= 122){

        cifradoCesar=(string2.charCodeAt(i) +97 + parseInt(key)) % 26 + 97;
      }

        // Para el espacio
      else if(string2.charCodeAt(i) == 32) {
        cifradoCesar=(string2.charCodeAt(i));
      }

        //Para los caracteres ASCII 33 al 64
      else if(string2.charCodeAt(i) >= 33 && string2.charCodeAt(i) <= 64){
        cifradoCesar = (string2.charCodeAt(i));
      }

        //Para los caracteres ASCII 123 al 126
      else if(string2.charCodeAt(i) >= 123 && string2.charCodeAt(i) <= 170){
        cifradoCesar = (string2.charCodeAt(i));
      }

        // Obtener la letra descifrada
      let mensajeDescifrado= String.fromCharCode(cifradoCesar);

        //Acumular las letras descifradas
      descifrado+=mensajeDescifrado;

      }
        //Retornar mensaje descifrado
        return descifrado;
      }


};
