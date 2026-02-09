const messages = [
    "Weh?",
    "Sure?",
    "Sure talaga?",
    "Please...",
    "Awa na lang, dol",
    "Dun ako na longcoat",
    "Huhuhuhu",
    "Ouch pain pighati",
    "K fine",
    "Jok, sige na please"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}