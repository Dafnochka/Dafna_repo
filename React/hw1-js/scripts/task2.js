let figure;
let result = {};

//Функция площади по умолчанию
function calcArea(radius) {
    result={
        figure: 'Круг',
        input : {
            radius: radius,
        },
    };
    return result.area=3.14 * radius * radius;
}

// Определяем блоки названий параметров
let par1 = $('span.parametr1');
let par2 = $('span.parametr2');

//Функция изменеия фигуры
function changeFigure(figure) {
    let block2 = $('.parametr2');
    result = {
        figure: figure,
    };
    switch (figure) {
        case 'Круг':
            block2.hide();
            par1.html('Радиус');
            calcArea = radius => {
                result.input = {
                    radius: radius,
                };
                return 3.14 * radius * radius;
            };

            break;

        case 'Квадрат':
            block2.hide();
            par1.html('Сторона');
            calcArea = side => {
                result.input = {
                    side: side,
                };
                return side * side;
            };
            break;

        case 'Прямоугольник':
            block2.show();
            par1.html('Сторона 1');
            par2.html('Сторона 2');
            calcArea = (side1, side2) => {
                result.input = {
                    side1: side1,
                    side2: side2,
                };
                return  side1 * side2;
            };

            break;
        case 'Треугольник':
            block2.show();
            par1.html('Основание');
            par2.html('Высота');
            calcArea = (base, heigth) => {
                result.input = {
                    base: base,
                    height: heigth,
                };
               return base * heigth / 2;
            };
            break;

        default:
            console.log('Ошибка');
            break;
    }
}


$(document).ready(() => {


    $('#figure').on('change', (event) => {
        //Определяем фигуру и показываем нужное количество полей ввода
        figure = event.target.value;
        changeFigure(figure);
    });
    $('#task2 button').on('click', (event) => {
        //Убираем функцию кнопки по умолчанию
        event.preventDefault();
        //Берем введенные параметры
        const parametr1 = +$('#parametr1')[0].value;
        const parametr2 = +$('#parametr2')[0].value;
        // Считаем площадь
        result.area = calcArea(parametr1, parametr2);
        $('#task2 .result').html(JSON.stringify(result));

    });


});