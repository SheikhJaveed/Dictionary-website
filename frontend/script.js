const dictionary = (word) => {
    fetch(`https://dictionary-website-backend.vercel.app/dictionary?word=`+word)
        .then(response => response.json())
        .then(response => {
            if (!response.definition || response.definition.includes("No definition found")) {
                document.getElementById('word').innerHTML = "Not Found";
                document.getElementById('definition').innerHTML = "❌ No definition found for this word.";
            } else {
                document.getElementById('word').innerHTML = response.word;
                document.getElementById('definition').innerHTML = response.definition.replace(/\d/g, "<br>$&");
            }
        })
        .catch(err => console.log(err));
};


// Event listener for search button
document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(document.querySelector("input[type='search']").value);
});


document.querySelector(".home-btn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevents page reload
    document.querySelector("input[type='search']").value = ""; // Clears search input
    document.getElementById("word").innerHTML = "Your word will appear here"; // Resets word display
    document.getElementById("definition").innerHTML = "Welcome to the dictionary app.<br>Type your favorite word in the search bar."; // Resets definition
});
