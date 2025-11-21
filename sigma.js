function h1click() {
    document.getElementsByClassName("indexh1")[0].innerHTML = "Oh great heavens";
}
function p2copy() {
    const copytext = document.getElementById("email").innerText;
    navigator.clipboard.writeText(copytext)
        .then(() => console.log("Copied:", copytext))
        .catch(err => console.error("Copy failed:", err));
}

