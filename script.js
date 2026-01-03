const petals = document.querySelectorAll(".petal");
const core = document.querySelector(".core");

petals.forEach((petal, i) => {
    setTimeout(() => {
        petal.style.transition = `
            transform 1.6s cubic-bezier(.19,1,.22,1),
            opacity 1.2s ease,
            filter 1.6s ease
        `;
        petal.style.transform = "scale(1) rotate(0deg)";
        petal.style.opacity = "1";
        petal.style.filter = "blur(0px) drop-shadow(0 0 18px rgba(255,130,190,.55))";
    }, i * 160);
});

setTimeout(() => {
    core.style.transition = `
        transform 1.2s cubic-bezier(.19,1,.22,1),
        opacity 1s ease,
        filter 1.2s ease
    `;
    core.style.transform = "scale(1)";
    core.style.opacity = "1";
    core.style.filter = "blur(0px) drop-shadow(0 0 25px rgba(255,200,220,.8))";
}, petals.length * 160);
