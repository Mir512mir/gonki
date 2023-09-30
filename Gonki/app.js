// Получаем элемент Canvas и его контекст
let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
// Создание переменных контроля
let myCar1 = new Image();
let bg= new Image();
let obstacle = new Image();
let gameOver = new Image();


car1.src = "./images/520263-PIXO4K-478.jpg";
bg.src = "./images/Road19.jpg";
obstacle.src="./images/—Pngtree—yellow cardboard boxes_4282868.png";
gameOver.src="";
// position
let xCar1 = 290,
    yCar= canvas.height-80,
    min =90,
    max =640,
    obstacle=[];

 obstacle[0]={
    x:450,
    y:200
}
//peremennyje sostojanija
let score=0;
let isArrowRightPressed=false;
let isArrowLeftPressed=false;

//Sobutyje
function keyDownHandler(event) {
    // Движение машинки игрока 1
    if (event.keyCode == 39) {
        car1.x += 10;
    }
    if (event.keyCode == 37) {
        car1.x -= 10;
    }
}



// Создаем массив препятствий
let obstacles = [];
obstacles.src="./images/—Pngtree—yellow cardboard boxes_4282868.png"
// Функция рисования игровых объектов
function draw() {
    // Очищаем Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bg,0,0)
    context.drawImage(obstacle,obstacles[i].x,obstacles[i].y);
      obstacles[i].y--;
        
    }
    // Рисуем машинки
    context.drawImage(car1.image, car1.x, car1.y);
    

    // Рисуем препятствия
    obstacles.forEach(function(obstacle) {
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });


// Функция обновления игры
function update() {
    // Обновляем положение машинок
    car1.y -= 1;
    

    // Проверяем столкновения с препятствиями
    obstacles.forEach(function(obstacle) {
        if (car1.y < obstacle.y + obstacle.width &&
            car1.y + car1.width > obstacle.y &&
            car1.x < obstacle.x + obstacle.height &&
            car1.x + car1.height > obstacle.x) {
            alert("Игрок 1 проиграл!");
        }

        
    });

    // Перерисовываем игру
    draw();
}

// Функция генерации препятствий
function generateObstacles() {
    let obstacle = {
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 50,
        height: 50
    };

    obstacles.push(obstacle);
}

// Обработчик нажатия клавиши
function keyDownHandler(event) {
    // Движение машинки игрока 1
    if (event.keyCode == 39) {
        car1.x += 10;
    }
    if (event.keyCode == 37) {
        car1.x -= 10;
    }

    
}

// Обработчик загрузки страницы
document.addEventListener("DOMContentLoaded", function(event) {
    // Назначаем обработчик нажатия клавиши
    document.addEventListener("keydown", keyDownHandler, false);

    // Генерируем препятствия каждую секунду
    setInterval(generateObstacles, 1000);

    // Обновляем игру каждую секунду
    setInterval(update, 1000 / 60);
});
