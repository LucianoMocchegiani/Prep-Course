// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var contenedor=[]
  for (var i = 0; i < (Object.keys(objeto).length) ; i++){
      console.log(i)
      var array = [(Object.keys(objeto)[i]), Object.values(objeto)[i]]
      contenedor.push(array) ;
  }
  return contenedor;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contador = {};
  for (var i = 0 ; i <string.length ; i++){   
    if (contador.hasOwnProperty(string[i])){
      contador[string[i]] = contador[string[i]] +1;
    }
    else {       
      contador[string[i]] = 1;  
    }
  }
  return contador;  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas ="";
  var minusculas ="";
  for (var i = 0 ; i <s.length ; i++){
    if (s[i] === s[i].toLowerCase()){
      minusculas += s[i];
    }
    else {
      mayusculas += s[i];
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" ");
  var cadena ="";
  for (var i = 0 ; i <array.length ; i++){
      cadena +=" "+ array[i].split("").reverse().join("");
  }
  var cadenaterminada = "";
  for (var i = 1 ; i <cadena.split("").length ; i++){
      cadenaterminada += cadena.split("")[i];
  }
  return cadenaterminada;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function de_numero_a_array(num){
    var array=[]
    for (var i = 0 ; i <(String(num).split("").length) ; i++){
        array.push(Number(String(num).split("")[i]));
    }
    return (array);
  } 
  function de_array_a_numero(array){
    var numero= ""
    for (var i = 0 ; i <array.length ; i++){
        numero += (String(array[i]).split("").join(""));
    }
    return (Number(numero));


  }
  function numero_capicua(array_de_numeros){
    var capicuapart1 = []
    var capicuapart2 = []   
    if (array_de_numeros.length % 2 === 0){//si el array es par
        for (var i = 0 ; i < array_de_numeros.length ; i++){
           
            if (i > (array_de_numeros.length/2)-1) {   //-1
                capicuapart2.push(array_de_numeros[i])      
            } 
            else {
                capicuapart1.push(array_de_numeros[i])
            }                    
        }
    }
    else { // si el array es inpar
        for (var i = 0 ; i < array_de_numeros.length ; i++){
            
            if (i > (Math.floor(array_de_numeros.length/2))) {   
                capicuapart2.push(array_de_numeros[i])      
            } 
            else if (i < (Math.floor(array_de_numeros.length/2))) {
                capicuapart1.push(array_de_numeros[i])
            }     
        }
    }
    var p1 = de_array_a_numero(capicuapart1);
    var p2 = de_array_a_numero(capicuapart2.reverse()); 
    if (p1 === p2 ){
        return ("Es capicua");
    }
    else {
        return ("No es capicua");
    } 
  }
  return (numero_capicua(de_numero_a_array(numero)))
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var eliminadas = [];
  var version_modificada = [];
  for (var i = 0; i < cadena.length; i++){
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      eliminadas.push(cadena[i]);
    }
    else {
      version_modificada.push(cadena[i]);
    }
  }
  
  return version_modificada.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while (cambio){
    cambio = false;
    for (var i = 0; i < arr.length-1; i++){
      if (arr[i].length > arr[i+1].length){
        var aux = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = aux;
        cambio = true;
      }
    } 
  }
  return arr;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array_union=[];
  function union(elemento,array){

    for (var i = 0; i < array.length; i++){   
      if (elemento === array[i]){                  
          
        return (true);
      }                                           
    }

  }
  for (var i = 0; i < arreglo1.length; i++){
      
      if (union(arreglo1[i],arreglo2)) {
         array_union.push(arreglo1[i]);
      }  
  }
  return array_union;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

