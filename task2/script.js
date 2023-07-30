const date = document.querySelector('#date');
const textred = document.querySelector('#textred');
const text = document.querySelector('#text');
const button = document.querySelector('#button');
const currentDate = new Date();

function calculateDays() {
    if (date.value == '') {
        text.textContent = 'Введите дату рождения';
        text.style.color = "red";
    } else {
        let days = Math.ceil((date.valueAsNumber - currentDate) / 1000 / 60 / 60 / 24);
        let num = days % 10;
        text.style.color = 'rgba(135, 174, 219, 0.788)';
        if (num == 0 || ((num >= 5 && num <= 9) || ((days / 100) >= 11 && (days / 100) <= 19)) || (days >= 14 && days <= 19)) {
            text.textContent = 'До вашего дня рождения осталось ' + days + ' дней';
        } else if (num >= 2 && num <= 4) {
            text.textContent = 'До вашего дня рождения осталось ' + days + ' дня';
        } else if (num == 1) {
            text.textContent = 'До вашего дня рождения остался ' + days + ' день';
        }
    }
}

button.addEventListener('click', calculateDays);