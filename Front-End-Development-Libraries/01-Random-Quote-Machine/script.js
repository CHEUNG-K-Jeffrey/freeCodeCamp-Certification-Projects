let quotes = [
    {
      text: 
"Great things in business are never done by one person,They are done by a team of people",
      author: "Steve Jobs, Steve Jobs: His Own Words and Wisdom",
      source: "https://www.goodreads.com/quotes/8621436-great-things-in-business-are-never-done-by-one-person-they"
    },
    {
      text: "Get your mind around it. You can do it",
      author: "Steve Jobs, Steve Jobs: His Own Words and Wisdom",
      source: "https://www.goodreads.com/quotes/8203027-get-your-mind-around-it-you-can-do-it"
    },
    {
      text: "The Only Way to Do Great Work is To Love What You Do",
      author: "Steve Jobs, Steve Jobs: His Own Words and Wisdom",
      source: "https://www.goodreads.com/quotes/8070032-the-only-way-to-do-great-work-is-to-love"
    },
    {
      text: "It doesn't make sense to hire smart people and then tell them what to to , We hire smart people so they can tell us what to do.",
      author: "Steve Jobs, Steve Jobs: His Own Words and Wisdom",
      source: "https://www.goodreads.com/quotes/8586131-it-doesn-t-make-sense-to-hire-smart-people-and-then"
    }
  ];

function nextQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  let url = new URL("https://twitter.com/intent/tweet?text=" + quote.text)
  $( "#text" ).text(quote.text);
  $( "#author" ).text(quote.author);
  $( "#tweet-quote" ).attr("href", url.href);
}

function main() {
  nextQuote();
  $( "#new-quote" ).click(nextQuote);
}

$( document ).ready( main );