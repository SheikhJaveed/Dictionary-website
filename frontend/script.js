const API_URL = "https://dictionary-website-ta65.onrender.com/dictionary";

// Helper function to update the word and definition in the DOM
function updateDisplay(wordText, definitionText) {
    document.getElementById('word').innerHTML = wordText;
    document.getElementById('definition').innerHTML = definitionText;
}

// Main dictionary function
const dictionary = async (word) => {
    if (!word) {
        updateDisplay("⚠️ Enter a word", "Please type a word in the search bar.");
        return;
    }

    updateDisplay("⌛ Searching...", "Fetching definition...");

    try {
        const response = await fetch(`${API_URL}?word=${word}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        // Handle API response safely
        const definition = data.definition || "❌ No definition found for this word.";
        const validWord = data.word || word;

        updateDisplay(validWord, definition);
    } catch (err) {
        console.error(err);
        updateDisplay("❌ Error", "Failed to fetch definition. Please try again later.");
    }
};

// Event listener for search button
document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const wordInput = document.querySelector("input[type='search']").value.trim();
    dictionary(wordInput);
});

// Event listener for home button to reset display
document.querySelector(".home-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("input[type='search']").value = "";
    updateDisplay(
        "Your word will appear here",
        "Welcome to the dictionary app.<br>Type your favorite word in the search bar."
    );
});
