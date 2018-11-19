const client_w=innerWidth;
const client_h=innerHeight;


//Определяем размер поля
const size=Math.min(client_w,client_h)*0.9;
const desk=document.querySelector('#desk');
desk.style.width=size+"px";
desk.style.height=size+"px";

//Создаем разметку
var divLet ;
var letter;
const letters=['','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
const numbers=['8','7','6','5','4','3','2','1'];
let figure={};

function CreateDivLet(parent) {
    divLet = document.createElement("div");
    parent.appendChild(divLet);
    divLet.className = "let";
    divLet.style.width=size/10+"px";
    divLet.style.height=size/10+"px";
    divLet.style.background='#838482';
    divLet.style.margin=0;
    divLet.style.float='left';
    divLet.style.display='flex';
    divLet.style.alignItems='center';
    divLet.style.justifyContent='center';

}

function doLetters(arr, parent) {
    for (var i in arr){
        CreateDivLet(parent);
        letter = document.createElement("div");
        divLet.appendChild(letter);
        letter.innerHTML=arr[i];
    }
}

doLetters(letters,desk);


const middle = document.createElement("div");
desk.appendChild(middle);
middle.style.width='100%';
middle.style.height=size*0.8+"px";
// middle.style.background='#84307f';
middle.style.margin=0;
middle.style.display='flex';
middle.style.flexWrap='wrap';
middle.style.flexDirection='column';

doLetters(letters,desk);
doLetters(numbers,middle);

const field=document.createElement("div");
middle.appendChild(field);
field.style.width='80%';
field.style.height='100%';
// field.style.background='#468452';
field.style.margin=0;
field.style.display='flex';
field.style.flexWrap='wrap';

doLetters(numbers,middle);

//Делаем клетки поля
const cells=[];
for(var i=1; i<9;){
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i]+'8';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i]+'8';
    cells[i]=divLet;
    i++;
}
for(var i=9; i<17;){
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-8]+'7';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-8]+'7';
    cells[i]=divLet;
    i++;
}
for(var i=17; i<25;){
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-16]+'6';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-16]+'6';
    cells[i]=divLet;
    i++;
}
for(var i=25; i<33;){
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-24]+'5';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-24]+'5';
    cells[i]=divLet;
    i++;
}
for(var i=33; i<41;){
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-32]+'4';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-32]+'4';
    cells[i]=divLet;
    i++;
}
for(var i=41; i<49;){
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-40]+'3';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-40]+'3';
    cells[i]=divLet;
    i++;
}
for(var i=49; i<57;){
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-48]+'2';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-48]+'2';
    cells[i]=divLet;
    i++;
}
for(var i=57; i<65;){
    CreateDivLet(field);
    divLet.style.background="black";
    divLet.id=letters[i-56]+'1';
    cells[i]=divLet;
    i++;
    CreateDivLet(field);
    divLet.style.background="white";
    divLet.id=letters[i-56]+'1';
    cells[i]=divLet;
    i++;
}

//Расставляем фигуры

// console.log(cells);
for (i=1; i<6; i++){
    figure = document.createElement("img");
    figure.src='images/'+i+'.png';
    figure.style.width='100%';
    figure.style.height='100%';
    cells[i].appendChild(figure);
}
