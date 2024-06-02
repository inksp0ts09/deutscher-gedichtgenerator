function showPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context = "You are a romantic poem expert. You love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Do not include a title with the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning.";
    let prompt = `Generate a German poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating German poem about ${instructionsInput.value}</div>`;

    console.log("Generating poem...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiURL).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);





//let gedichtElement = document.querySelector("#gedicht");
//"Man wird niemals eine Sprache verstehen können ohne eine zweite zu kennen --Geoffrey Willans",