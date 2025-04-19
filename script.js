const quoteText = document.getElementById("quote");
const button = document.getElementById("new-quote");
let quotes = []; // Will be filled from JSON

// Load quotes from the JSON file
fetch("quotes.json")
  .then(response => response.json())
  .then(data => {
    quotes = data;

    // Show a quote on first load
    showRandomQuote();
  })
  .catch(error => {
    quoteText.textContent = "Failed to load quotes.";
    console.error("Error loading quotes.json:", error);
  });

// Show a new random quote with fade-in animation
function showRandomQuote() {
  if (quotes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[randomIndex];

  // Trigger fade-out
  quoteText.classList.remove("show");

  // Wait for fade-out, then change text and fade in
  setTimeout(() => {
    quoteText.textContent = newQuote;
    quoteText.classList.add("show");
  }, 100);
}

// Button click shows new quote
button.addEventListener("click", showRandomQuote);

// Initial setup: add fade class on page load
window.addEventListener("DOMContentLoaded", () => {
  quoteText.classList.add("fade", "show");
});