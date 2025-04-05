function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

window.onload = function() {
    const text = "Hi! I'm a passionate Full Stack Developer";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("intro").textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
};

function showComingSoon() {
    alert("Coming Soon!");
}