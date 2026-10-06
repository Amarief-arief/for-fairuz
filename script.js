const startButton = document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener("click", function () {

        document.body.classList.add("page-exit");

        setTimeout(function () {
            window.location.href = "anniversary.html";
        }, 1200);

    });

}


// ============================
// ANNIVERSARY COUNTDOWN
// ============================

const anniversaryDate = new Date("October 26, 2027 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    const daysElement = document.getElementById("days");

    if (daysElement) {

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ============================
// LOVE LETTER
// ============================

const openLetter = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

if (openLetter && letterContent) {

    const envelope = document.querySelector(".envelope");

    openLetter.addEventListener("click", function () {

        letterContent.classList.toggle("show");

        if (envelope) {
            envelope.classList.toggle("open");
        }

        if (letterContent.classList.contains("show")) {

            openLetter.textContent = "Close my letter ♡";

        } else {

            openLetter.textContent = "Open my letter ♡";

        }

    });

}


// ============================
// MUSIC
// ============================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {
                    musicButton.textContent = "⏸ Pause Song";
                })
                .catch(function (error) {
                    console.log("Music error:", error);
                });

        } else {

            music.pause();
            musicButton.textContent = "♫ Our Song";

        }

    });

}
