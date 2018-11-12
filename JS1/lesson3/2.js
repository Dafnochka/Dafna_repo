let k=0;
let name;
alert("Задание 2, результат будет выведен в консоль");
console.log("Задание 2");

do {
    if (k==0){
        name=" - это ноль";
    }
    else if(k%2==0){
        name=" - четное число";
    }
    else {
        name=" - нечетное число";
    }
    console.log(k++ + name);

}while (k<=10);
