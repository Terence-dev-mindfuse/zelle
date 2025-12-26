// Timer functionality
const startDate = new Date('2025-07-26T10:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent =
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

updateTimer();
setInterval(updateTimer, 1000);

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 800);

// Typing effect
const messages = [
    { id: 'line1', text: 'Hi Zelle ! !' },
    { id: 'line2', text: 'Happy 5th Monthsarry ! !' },
    { id: 'line3', text: 'Thank you for the never ending love you gave me this year...' },
    { id: 'line4', text: 'Thank you for making my 2025 so meaningful. Meeting you was truly special, and I had such a wonderful time. I hope we get to share many more moments together in the future.' },
    { id: 'line5', text: 'And to celebrate our monthsary...' },
    { id: 'line6', text: '\nI\'ve prepared this just for you!' }
];

let currentLine = 0;
let currentChar = 0;
let typingSpeed = 50; // milliseconds per character

function typeText() {
    if (currentLine < messages.length) {
        const message = messages[currentLine];
        const element = document.getElementById(message.id);

        if (currentChar < message.text.length) {
            const char = message.text[currentChar];
            if (char === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.textContent += char;
            }
            currentChar++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Move to next line after a short pause
            currentLine++;
            currentChar = 0;
            if (currentLine < messages.length) {
                setTimeout(typeText, 500);
            } else {
                // Show heart button after all text is typed
                setTimeout(() => {
                    document.getElementById('heartButton').classList.add('show');
                }, 1000);
            }
        }
    }
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// Modal functionality
const heartButton = document.getElementById('heartButton');
const modal = document.getElementById('imageModal');
const closeButton = document.getElementById('closeButton');

heartButton.addEventListener('click', () => {
    modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});