alert ("Hola chicas");

var compar = function (arreglo1, arreglo2) {
  if (arreglo1.length !== arreglo2.length) {
    return false;
  }else {
    for (var i = 0; < arreglo1.lenght ; i +=1){
      if (arreglo1[i] !== arreglo2 [i]) {
        return false;
      }
    }
    return true;
  }
}
var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [1,2,3,4,5,6,7,8,9,10];

comparar (array1, array2);
