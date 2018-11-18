let c = +prompt("Введите число 1");
let d = +prompt("Введите число 2");
let operation = prompt("Введите номер операции: сложение - 1, вычитание - 2, умножение - 3 или делене - 4");

function summ(a, b) {
    return(a+b);
}
function sub(a, b) {
    return(a-b);
}
function mult(a, b) {
    return(a*b);
}
function div(a, b) {
    return(a/b);
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "1":
            alert(summ(arg1,arg2));
            break;
        case "2":
            alert(sub(arg1,arg2));
            break;
        case "3":
            alert(mult(arg1,arg2));
            break;
        case "4":
            alert(div(arg1,arg2));
            break;
    }
}

mathOperation(c,d, operation);