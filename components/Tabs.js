// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios'



axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //checking data
        console.log(response.data.topics)
        //invoking topicMaker function with data
        topicMaker(response.data.topics)
    })
    .catch(err => {
        console.log('error!')
    })


function topicMaker (topicArray){
    const topics = document.querySelector('div.topics')
    topicArray.forEach( item =>{
        const topic = document.createElement('div')
        topic.className = 'tab'
        topic.textContent = item
        topics.appendChild(topic)
    }   
    )
     return topics
}

