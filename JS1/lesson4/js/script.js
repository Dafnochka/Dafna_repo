let levels = [
	{
		'1': {
			lvlText: 'Налево пойдёшь - коня потеряешь, направо пойдёшь - жизнь потеряешь, прямо пойдёшь - жив будешь, да себя позабудешь',
			answers: {
				'0': 'Вывести ход',
				'1': 'Пойти налево',
				'2': 'Пойти направо',
				'3': 'Пойти прямо'
			}
		}
	},
	{
		'1': {
			lvlText: 'Вы встретили Соловья-разбойника',
			answers: {
                '0': 'Вывести ход',
                '1': 'Сразиться с ним',
				'2': 'Попробовать обойти'
			}
		},
		'2': {
			lvlText: 'Вы встретили Змея Горыныча',
			answers: {
                '0': 'Вывести ход',
                '1': 'Украсть сокровища',
				'2': 'Сразиться с ним'
			}
		},
		'3': {
			lvlText: 'Вы встретили Варвара-красавица',
			answers: {
                '0': 'Вывести ход',
                '1': 'Жениться на ней'
			}
		}
	}
];
let endOfTheGame = false;
let currentStage = 0;
let userChoice = '1';
const step=[];
let stepnum=0;
let PrevChoice=0;

while(!endOfTheGame) {
	if(currentStage >= 0 && currentStage < levels.length){
		let choices = '';
		
		for(let answer in levels[currentStage][userChoice].answers){
			choices += answer + ' - ' + levels[currentStage][userChoice].answers[answer] + '\n';
		}
		PrevChoice=userChoice;
		userChoice = prompt(levels[currentStage][userChoice].lvlText + '\n' + choices);

		if(userChoice=='0'){
			stepnum=prompt("Введите номер шага");
			alert(step[stepnum]);
			userChoice=PrevChoice;
			continue;
		}
		step.push("Шаг: " + currentStage + '\n' + levels[currentStage][PrevChoice].lvlText + '\n' + "Выбор: "+ levels[currentStage][PrevChoice].answers[userChoice]);
        currentStage++;
	} else {
		if(userChoice == '1') {
			alert("И жили вы долго и счастливо!");
			endOfTheGame = true;
		} else {
			alert("И сложили вы буйну голову!");
			endOfTheGame = true;	
		}			
	}
}