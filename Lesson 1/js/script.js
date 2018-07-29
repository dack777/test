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