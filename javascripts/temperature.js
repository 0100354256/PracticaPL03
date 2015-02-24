function calculate() {
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /^([+-]?\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)\s*([cCfF])$/;

  var m = temp.match(regexp);
  
  if (m) {
    var num = parseFloat(m[1]);
    var type = m[2];

    converted.innerHTML = (type == 'c' || type == 'C') ? ((num * 9/5)+32)+'F' : ((num - 32)*5/9)+'C';
  }
  else
    converted.innerHTML = "¡ERROR! Formato Incorrecto";
}