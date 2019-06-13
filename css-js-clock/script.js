const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function tick() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360);

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360);

    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360);

    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
    console.log(hours);
}

setInterval(tick, 1000);
