const arrayOfLoveWishes = [
    "Нехай кожендень приносить радість і тепло!",
    "Любові та щастя вам!",
    "Нехай кохання буде вічним!",
    "Бажаю багато конання та щастя!",
    "Нехай коханя буде!",
    "Бажаю багато кохання.",
    "Нехай кохання буде вічним!❤️!",

]
document.getElementById('btn_love_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfLoveWishes.length)
    document.getElementById('love-wishes').innerText = arrayOfLoveWishes [index]
    })