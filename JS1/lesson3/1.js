alert("Список простых чисел для задания 1 будет выведен в консоль");
const maxnum=100;
console.log("Задание 1");

let i=2;

while (i<=maxnum){
    let n=0; // количество делителей
    let j=2;
        while (j<=i){
        if (i%j==0 && i!==j ){
            n+=1;
        }
        j+=1;
    }
    if (n==0){
        console.log(i);
    }
    i+=1;
}
