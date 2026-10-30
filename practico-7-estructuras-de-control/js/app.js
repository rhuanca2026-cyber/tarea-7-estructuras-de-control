let edad = 20;
if(edad >= 18){
  console.log("Eres mayor de edad");
}
else{
  console.log("Eres menor de edad");
}
let dia=2;
switch(dia){
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("otro día");
}
for(let i=1; i<=3; i++) {
  console.log(i);
}
let i=1;
while(i<=3){
  console.log(i);
  i++;
}
let i=1;
do{
  console.log(i);
  i++;
}while(i<=3);
let numeros = [10, 20, 30];
for(const numero of numeros){
  console.log(numero);
}
try{
  let resultado = variableInexistente;
  confirm.log(resultado);
}catch(error){
  console.log("Ocurrió un error: ");
}