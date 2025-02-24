const arrayOfLoveWishes = [
    "May every day bring you joy and warmth!",
    "Wishing you love and happiness!",
    "May your love be eternal!",
    "Wishing you lots of love and happiness!",
    "May love always be with you!",
    "Wishing you lots of love.",
    "May your love be eternal! ❤️",
]
document.getElementById('btn_love_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfLoveWishes.length)
    document.getElementById('love-wishes').innerText = arrayOfLoveWishes [index]})