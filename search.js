const books = [{
    "book-name":"Elantris",
    "description":"Elantris was once a place of magic, and the immortal Elantrians were gods in the eyes of people, with the divine ability to create and heal with a mere wave of a hand. Anyone in Arelon had the potential to become an Elantrian through a magical transformation known as the Shaod.",
    "author":"Brandon Sanderson"
},{
    "book-name":"War Breaker",
    "description":"Warbreaker tells the story of two Idrian princesses, Vivenna and Siri. Vivenna was contracted through a treaty written before she was born to marry the God King of rival nation Hallandren. However, King Dedelin sends his other daughter Siri to meet the treaty instead.",
    "author":"Brandon Sanderson"
},{
    "book-name":"Mistborn",
    "description":"From #1 New York Times bestselling author Brandon Sanderson, the Mistborn series is a heist story of political intrigue and magical, martial-arts action. For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear.",
    "author":"Brandon Sanderson"
},{
    "book-name":"Chaka",
    "description":"Chaka is the third and final novel by Mosotho writer Thomas Mofolo. Written in Sesotho, it is a mythic fictional retelling of the story of the rise and fall of the Zulu emperor-king Shaka",
    "author":"Thomas Mofolo"
},{
    "book-name":"Second coming of glutonny",
    "description":"After investigating a mystery that has eluded many, Seol Jihu sets off on a dangerous rescue mission within the Parasites' territory. As he finally manages to return to Haramark safely after an intense survival run from the Parasites, the Banquet is making news among the Earthlings.",
    "author":"Ro Yu-jin."
    
},{
    "book-name":"The beginning after the end",
    "description":"The Beginning After The End follows the life of the late King Grey after his untimely and mysterious death. Reborn as Arthur Leywin, he seeks to correct his past mistakes in the vibrant new continent of Dicathen, a world of magic and fantastical creatures",
    "author":"TurtleMe"

},{
    "book-name":"Angels and Demons",
    "description":"When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol — seared into the chest of a murdered physicist — he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati… the most powerful underground organization ever to walk the earth.",
    "author":"Dan Brown"
},{
    "book-name":"Chronicles of Narnia",
    "description":"The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world.",
    "author":"C.S. Lewis"
},{
    "book-name":"Shogun",
    "description":"The novel details the intense power struggle between the two most powerful daimyōs, Toranaga and Ishido, as they both seek to usurp power from the Taiko's heir. As a subtext, there is also the political manoeuvring of the Protestant and Catholic powers in the Far East.",
    "author":"James Clavell"
},{
    "book-name":"Da Vinci Code",
    "description":"The Da Vinci Code follows 'symbologist' Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
    "author":"Dan Brown"
}]

document.getElementById("search-now").addEventListener("click",function(){
    search()
})

const search = ()=>{
     let search_items = document.getElementById("search-items");
    // remove any previous search from screen 
     search_items.innerHTML=""
    let search = document.getElementById("search").value;
    // For each book object in the book array, check if either the book-name or the description or author has the search phrase. If any of that is true, it is added to the search result.
    let searchResults = books.filter((book)=>{
        if(book["book-name"].toLowerCase().includes(search.toLowerCase()) || book.description.toLowerCase().includes(search.toLowerCase())|| book.author.toLowerCase().includes(search.toLowerCase())){
            return true
        }
    })
    // After filtering, the next step is to display. For ease, We would just add the search result to the "search-items" div.

    searchResults.forEach((result)=>{
        search_items.innerHTML+=`<span>Book Name: ${result["book-name"]}</span>
        <span>Description: ${result.description}</span>
        <span>Author: ${result.author}</span> <br><br>`
    })
}