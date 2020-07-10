// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

const cardsContainer = document.querySelector('div.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        //loop through and add all articles of javascript
        for (let i = 0; i < response.data.articles.javascript.length; i++){
            cardsContainer.appendChild(articlesMaker(response.data.articles.javascript[i]))
        }
        //loop through and add all articles of javascript
        for (let i = 0; i < response.data.articles.bootstrap.length; i++){
            cardsContainer.appendChild(articlesMaker(response.data.articles.bootstrap[i]))
        }
        //
        const cardSelector = document.querySelectorAll('.card')
        const cardHeadline = document

        cardSelector.forEach(card =>{
            card.addEventListener('click', () => {
            console.log("headline")
})
})
    })
    .catch(err => {
        console.log('error!')
    })


//article maker for single object (not array of objects per instructions)
    function articlesMaker (articleObj){

        //creating element
        const card = document.createElement('div')
        const headline = document.createElement('div')
        const author = document.createElement('div')
        const imgContainer = document.createElement('div')
        const authorImg = document.createElement('img')
        const authorName = document.createElement('span')

        //assigning element attributes and content
        card.className = 'card'
        headline.className = 'headline'
        author.className = 'author'
        imgContainer.className = 'img-container'
        
        headline.textContent = articleObj.headline
        authorImg.setAttribute('src', articleObj.authorPhoto)
        authorName.textContent = `By ${articleObj.authorName}`

        //setting up structure
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(authorImg)
        author.appendChild(authorName)

        return card
    }

    //event listener

