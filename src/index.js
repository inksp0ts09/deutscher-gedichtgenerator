function anzeigeGedicht(response) {
    new Typewriter('#gedicht', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generateGedicht(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "885f433f6b0e4583af66o3432taca43c";
    let prompt = `Generate a German poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert. You love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Do not include a title with the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&apiKey=${apiKey}`

    console.lot("Generating poem...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiURL).then(anzeigeGedicht);
}

let poemFormElement = document.querySelector("#gedichtengenerator-form");
poemFormElement.addEventListener("submit", generateGedicht);





//let gedichtElement = document.querySelector("#gedicht");
//"Man wird niemals eine Sprache verstehen können ohne eine zweite zu kennen --Geoffrey Willans",