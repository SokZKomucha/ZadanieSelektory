const menuEl1 = document.getElementById("listElement1");
const menuEl2 = document.getElementById("listElement2");
const menuEl3 = document.getElementById("listElement3");
const menuEl4 = document.getElementById("listElement4");
const back = document.getElementById("backButton");
const gh = document.getElementById("github");

menuEl1.addEventListener("click", function() {
    window.location.href = "../index.html";
});

menuEl2.addEventListener("click", function() {
    window.location.href = "classes.html";
});

menuEl3.addEventListener("click", function() {
    window.location.href = "ids.html";
});

menuEl4.addEventListener("click", function() {
    window.location.href = "pseudoclasses.html";
});

back.addEventListener("click", function() {
    window.location.href = "elements.html#top";
});

gh.addEventListener("click", function() {
    window.location.href = "https://github.com/SokZKomucha";
})