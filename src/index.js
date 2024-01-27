function generateGedicht(event) {
    event.preventDefault();
    let gedichtElement = document.querySelector("#gedicht");
    new Typewriter('#gedicht', {
        strings: "Man wird niemals eine Sprache verstehen können ohne eine zweite zu kennen --Geoffrey Willans",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#gedichtengenerator-form");
poemFormElement.addEventListener("submit", generateGedicht);
