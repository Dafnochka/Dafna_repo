class Human {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = new Date(Date.parse(dateOfBirth));
        this.age = Math.floor((new Date() - this.dateOfBirth) / (24 * 3600 * 365.25 * 1000));
    }

    displayInfo() {
        let key;
        let infoString = '';
        for (key in this) {
            if (this[key] instanceof Human) {
                infoString += key + ': ' + this[key].name + ', ';

            } else {
                infoString += key + ': ' + this[key] + ', ';
            }
        }
        return infoString;
    }
}

class Employee extends Human {
    constructor(name, dateOfBirth, salary, department) {
        super(name, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
}

class Developer extends Employee {
    constructor(name, dateOfBirth, salary, department) {
        super(name, dateOfBirth, salary, department);
        this.manager = null;
    }

    changeManager(newManager) {
        this.manager.removeDeveloper(this);
        newManager.addDeveloper(this);
    }
}

class Manager extends Employee {
    constructor(name, dateOfBirth, salary, department) {
        super(name, dateOfBirth, salary, department);
        this.developers = [];
    }

    //Добавление разработчика
    addDeveloper(developer) {
        this.developers.push(developer);
        developer.manager = this;

    }

    //Удаление разработчика
    removeDeveloper(developer) {
        this.developers.splice(this.developers.indexOf(developer), 1);
        developer.manager = null;

    }
}


//Проверка
const manager1 = new Manager('Dmitry', '1991-3-2', 1000, 'Main');
const manager2 = new Manager('Alex', '1987-10-5', 1000, 'Main');
const developer1 = new Developer('Daria', '1989-09-25', 1000, 'Main');


manager1.addDeveloper(developer1);
// manager1.removeDeveloper(developer1);

developer1.changeManager(manager2);

// console.log(manager1);
// console.log(manager2);
// console.log(developer1);

// console.log(developer1.displayInfo());