/*let number = 5;
console.log(number);
alert("Вход запрещён")
let answer = confirm("Есть ли вам 18 лет?");
let answer = prompt("Есть ли вам 18 лет?");
console.log(answer);*/

/*let answers = [],
	questions = [
	"Как ваше имя?"
	"Как ваша фамилия"
	"Сколько вам лет?"
	];

for(let i=0; 1 < qestions.length; i++) {
	answers[i] = prompt(questions[i])
}*/

/*answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия", "");
answers[2] = prompt("Сколько вам лет?", "");
document.write(answers)

for (let i = 0; i < 10; i++) {
	console.log(i) 
}*/

/*let age = prompt("Сколько вам лет?"); 

if (age > 18) {
	alert("Вы можете войти!")
} else {
	alert("Рановато ещё!")
} */
/*Эти команды - это встроенное действие.
Действия программ - это функции-
фундаментальная часть программы. 
Внутри функции может быть что угодно: цикл,условие,
команда, другая функция */

 /*function humanSayHello(obj) {
 	document.write("Hello " + obj + "!")
 };

humanSayHello(Ivan);
humanSayHello(Ne IvaN);
humanSayHello(Anna); */
//Можно использовать много раз, с разными аргументами

/* function calc(a,b) {
	console.log(a+b)
};

calc(4,5);
calc(5,5);
calc(5,15); */

function myFirstApp(name, age) {

	name = prompt("Как ваше имя?", "");
	
	alert("Привет, меня зовут " + name + " и это моя первая программа");

	function showSkills() {
		let skills = ["html", "css", "js"];

		for (let i=0; i < skills.length; i++) {
			skills[i] = alert("Я владею " + skills[i] + "!"); 
			//document.write("Я владею " + skills[i] + "!" + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		let age = prompt("Сколько тебе лет?");
		if (age >= 18) {
			alert("У тебя мало шансов стать front end разработчиком")
		} else {
			alert("Тебе повезло, у тебя отличные шансы стать front end разработчиком")
		}
	}

	checkAge()

	function calcPow(num) {
		//Напиши функционал 
		console.log(num*num)
	}

	calcPow(4)

}

myFirstApp();