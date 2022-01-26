// Time counting

const count = new Date('jan 1, 2023 00:00:00').getTime();

function checkTime(i) {
    return (i < 10) ? `0${i}` : i;
};
setInterval(() => {
    const now = new Date().getTime();
    const newYear = count - now;

    let days = Math.floor(newYear / (1000 * 60 * 60 * 24));
    let hours = Math.floor(newYear % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(newYear % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(newYear % (1000 * 60) / (1000));

    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;

}, 1000);

// Snow effect

setInterval(createSnow, 20);

function createSnow() {
    const snow = document.createElement('i');
    snow.classList.add('far');
    snow.classList.add('fa-snowflake');

    snow.style.left = `${Math.random() * window.innerWidth}px`;
    snow.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snow.style.opacity = Math.random();
    snow.style.fontSize = `${Math.random() * 10 + 10}px`;
    document.body.append(snow);

    setTimeout(() => {
        snow.remove();
    }, 4000);
}