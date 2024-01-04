const api_url = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const quoteBtn = document.querySelector("#quoteBtn");
const tweetBtn = document.querySelector("#tweetBtn");

const getQuote = async (url) => {
    const response = await fetch(url)
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author
}

const tweet = () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML, "Tweet Window", "width=600, height=300")
}

quoteBtn.addEventListener("click", () => getQuote(api_url));
tweetBtn.addEventListener("click", tweet());