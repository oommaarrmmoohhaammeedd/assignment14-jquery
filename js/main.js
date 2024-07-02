const side = document.getElementById("aside")
const open = document.getElementById("open")
const close = document.getElementById("close")
const documentHTML = document;
const inputs = documentHTML.querySelectorAll("input");
const sendBtn = documentHTML.getElementById('sendBtn');
const myTextArea = documentHTML.getElementById('textArea');
const remainCharText = documentHTML.getElementById('remainChar');
const MAX_CHARS = 100;
let remaining = MAX_CHARS - myTextArea.value.length;

$(open).on("click", function () {
    $(side).animate({ width: 'toggle' }, 500)
})

$(close).on("click", function () {
    $(side).animate({ width: 'toggle' }, 500)
})

$(".one").on("click", function () {
    $(".text1").slideToggle(500)
    $(".text2").slideUp(500)
    $(".text3").slideUp(500)
    $(".text4").slideUp(500)
})

$(".two").on("click", function () {
    $(".text2").slideToggle(500)
    $(".text1").slideUp(500)
    $(".text3").slideUp(500)
    $(".text4").slideUp(500)
})

$(".three").on("click", function () {
    $(".text3").slideToggle(500)
    $(".text1").slideUp(500)
    $(".text2").slideUp(500)
    $(".text4").slideUp(500)
})

$(".four").on("click", function () {
    $(".text4").slideToggle(500)
    $(".text1").slideUp(500)
    $(".text2").slideUp(500)
    $(".text3").slideUp(500)
})


function remainChar() {
    myTextArea.addEventListener('input', function () {
        remaining = MAX_CHARS - myTextArea.value.length;
        const color = remaining <= MAX_CHARS * 0.1 ? 'red' : null;
        remainCharText.textContent = `${remaining} Characters Remaining`;
        remainCharText.style.color = color;
        if (remaining <= -1) {
            sendBtn.setAttribute("disabled", true);
        }
        else {
            sendBtn.removeAttribute('disabled')
        }
    })
};

remainChar()

function setForm() {
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    myTextArea.value = '';
    remaining = MAX_CHARS;
    remainCharText.textContent = `${remaining} Characters Remaining`;
    remainCharText.style.color = null;
}

sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setForm();
});


//start counter sec 
document.addEventListener("DOMContentLoaded", () => {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const targetDate = new Date("2030-12-31T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = 0;
            hoursElement.textContent = 0;
            minutesElement.textContent = 0;
            secondsElement.textContent = 0;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
// end counter sec

