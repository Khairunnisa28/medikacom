var angkaString = '42';
// merubah menjadi integer
var angkaInteger = parseInt(angkaString);
// merubah menjadi float (desimal)
var angkaFloat = parseFloat(angkaString);

document.write("<h3>Conversion</h3>");
document.write("string: " + angkaString + "<br>");
document.write("Integer: " + angkaInteger + "<br>" );
document.write("Float: " + angkaFloat + "<br>");

//coercion (implicit type conversion)
var angka = 10;
var string = "29";
var hasil = angka + string;

document.write("<h3>coercion</h3>");
document.write("angka: " + angka + "<br>");
document.write("string: " + string + "<br>");
document.write("Hasil: " + hasil + "<br>");

var boolean = true;
var number = 42;
var result = boolean + number;

document.write("Boolean: " + boolean + "<br>");
document.write("Number: " + number + "<br>");
document.write("Result: " + result + "<br>");











