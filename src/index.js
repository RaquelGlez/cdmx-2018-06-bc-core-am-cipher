
//Captar mensaje
  let mensaje = document.getElementById('myMessage');
//Captar n, numero fijo para cifrar
  let offset = document.getElementById('offSet');


const cifrarMensaje=()=> {
  let string = mensaje.value;
  let key = offset.value;

  //Pintar el mensaje cifrado en
document.getElementById('myMessage2').value = cipher.encode(string,key);
  //console.log(cipher.encode(string,key));
  };



// Para el descifrado
  //Captamos mensaje a descifrar
  let myMessage2 = document.getElementById('myMessage2');
    //Captar n, numero fijo para cifrar
//let offset = document.getElementById('offSet').value;

//Llamar al evento de onclick
  const descifrarMensaje=()=> {
    let string2 = myMessage2.value;
    let key = offset.value;

// Pintar el mensaje descifrado

  document.getElementById('myMessage').value = cipher.decode(string2,key);
 };
