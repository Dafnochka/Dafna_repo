const val1 = +prompt("Введите число");
const pow1 = +prompt("Введите степень");
let result=1;
function power(val,pow) {

    if (pow==0) {
        alert(result);
        return;
    }
    result *= val;
    power(val, pow-1);
}
power(val1,pow1);