
// ----------------------------------------------------------------------------------------------
// const names = ["Муха", "Абрик", "Андрей", "Кама"];
// const scores = [2, 234234, 4, 5];

// const select = document.getElementById("select");

// for (let i = 0; i < names.length; i++) {
// 	select.innerHTML += `<option value='${i}'>${names[i]}</option>`;
// }

// select.addEventListener("change", (e) => {


// 	document.getElementById("score").innerHTML = scores[e.target.value];





// });
// -----------------------------------------------------------------------------------------------
//ДЗ
// Создаете 3 массива, которые буду хранить данные о машинах
// На сайте, будет стоять кнопка, при нажатии на которую, у вас
// будет отображаться карточка рандомно показывающий тачку
//

// const carModel = ["AUDI","BMW","MERCEDES","TOYOTA","HYUNDAI"];
// const carType = ["SEDAN","SEDAN","SEDAN","SEDAN","SEDAN"];
// const carPrice = [200,222,111,555,643];



function randomDiv(){
	let cars = ["AUDI ","BMW ","MERCEDES ","TOYOTA ","HYUNDAI ","BMW X5 ","BMW MOTO "] ;
	let type= ["SEDAN ","SEDAN ","SEDAN ","SEDAN ","SEDAN ","SUV ","MOTO "]
	let price = ["33000$","65000$","103000$","44000$","19000$","33000$","17000$"]
	let arr = ['/img/']

	cars[0]+=type[0]+=price[0]
	cars[1]+=type[1]+=price[1]
	cars[2]+=type[2]+=price[2]
	cars[3]+=type[3]+=price[3]
	cars[4]+=type[4]+=price[4]
	cars[5]+=type[5]+=price[5]
	cars[6]+=type[6]+=price[6]

	// Getting a random value
	let randomItem = cars[Math.floor(Math.random() * cars.length)];

	
	
	
	
	
document.getElementById('info').innerHTML = randomItem ;
  }
  



