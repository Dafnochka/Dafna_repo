let a= +prompt("Введите число а: ");
let b= +prompt("Введите число b: ");

if (a>=0 && b>=0){
    alert("Числа положительные, разница равна " + Math.abs(a-b));
}
else if (a < 0 && b < 0) {
    alert("Числа отрицательные, произведение равно " + a * b);
}
else{
    alert("Знаки чисел разлчины, сумма равна " + (a +b));

}
