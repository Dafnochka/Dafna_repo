const fields=['Имя', "Фамилия", "адрес электронной почты"];
const userData={};

function* form(field){
    for (key in fields){
        $('#task4 span').html("Введите" + fields[key]);
        yield key;
        userData[fields[key]]=field;
    }
}

$(document).ready(() => {

    form();

    $('#task4 button').on('click', (event) => {
        //Убираем функцию кнопки по умолчанию
        event.preventDefault();

        //Берем введенный параметр
        const field = $('#field')[0].value;

    });


});