function loop(times, callback) {
    console.log('Функция loop запущена');
    let result='Параметры: times = '+ times + ', callback = ' + callback + '.';
    //Проверяем условия
    if (times<1 || callback=='null'){
        console.log('Функция callback не отработала ни разу');
        result+='Функция callback не отработала ни разу';
    }else {
        let i;
        for(i=0; i<times; i++){
            (()=> eval(callback))();
        }
        result+="Функция callback отработала " + i + 'раз';
    }
    $('#task1 .result').html(result);
    console.log('Функция loop отработала успешно');
}

$(document).ready(()=>{
    $('#task1 button').on('click', (event) => {
        //Убираем функцию кнопки по умолчанию
        event.preventDefault();

        const times=+$('#task1 .times')[0].value;
        const callback = $('#task1 .callback')[0].value;

        loop(times, callback);
    });

});


