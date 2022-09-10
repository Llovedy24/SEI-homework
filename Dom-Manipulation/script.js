let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 const changeTitle = function () {
  document.querySelector('#main-title').textContent - "Dom's homepage"
 }
 changeTitle();

  // Part 2
  const changeBackgroundColor = function() {
    document.querySelector('body').style.backgroundColor = 'pink'
  }
  changeBackgroundColor();

  // Part 3
  const removeListItem = function() {
    //select and cache UL (parent) and Li's (child)
    let list = document.getElementById('favorite-things') 
    //select and store only the li's from list variable
    let listItems = list.getElementsByTagName('li')  
    let last = listItems[listItems.length-1]  
    //selct and store the last li from listItems variable
    list.removeChild(last)   
    //remove the last li from list
  }
  removeListItem();

  // Part 4
  const changeFontSize = function(){
    const itemsList = document.querySelectorAll('.special-title')
    itemsList.style.fontSize = ('2rem')
  }
  changeFontSize();

  // Part 5
  const removeChicago = function() {
    const blogEls = document.getElementById('past-races')  
    //select the 6 ul and li elements
    const selectLis = blogEls.getElementsByTagName('li')  
    //select only th li elements
    const chicagoEl = selectLis[3]  
    //select the Chicago element at the 3rd index of select
    chicagoEl.remove()  
    //remove the Chicago element
   }
   removeChicago();  //call the function

  // Part 6
  const addRaceLi = function() {
    let pastRacesEls = document.getElementById('past-races') 
    //select Past Races ul and store in variable
    const newLi = document.createElement('li') 
    //create new blank li
    newLi.textContent = 'Baltimore'
    // add text to new li
    pastRacesEls.append(newLi)
    //append new Li to Past Races ul
  }
  addRaceLi();

  // Part 7
  const newBlogPost = function() {
    const blogPosts = document.querySelector('.main')
    //select the div element that is the parent of the blog-post divs (it has a class of main)
    
    const newDiv = document.createElement('div')
    //create a new div
    newDiv.setAttribute('class', 'blog-post purple')
    // add a class of .blog-post to new div

    const newH1 = document.createElement('h1') 
    //create a new h1
    newH1.textContent = 'Baltimore'  
    //add text content 'Baltimore'
    newDiv.append(newH1)
    //append new h1 to new div
    
   const newP = document.createElement('p') 
   //create a new p element
   newP.textContent = 'I left everyone in the dust!' 
   //add text some text 
   newDiv.append(newP)
   //append new p to div
   blogPosts.appendChild(newDiv)
   //append newDiv with enclosed new h1 and p elements to BlogPosts
  }
  newBlogPost();

  // Part 8
  const clickQuote = function() {
    selectQuote = document.querySelector('#quote-title')

    selectQuote.addEventListener('click', function() {
      const randomQuote = function() {
        document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
      };
    })
    console.log(selectQuote)
  }
  clickQuote();

  // Part 9
  const addHandlersAndToggle = function() {
  blogPostEls = document.querySelectorAll('.blog-post')  
  //select all .blog-post class elements
  
  for (element of blogPostEls) {  
    //iterate through the list of .blog-post elements
    //apply mouseout handler to each node
    element.addEventListener('mouseout', function() {
      this.classList.toggle('purple')
    }) 
  
    element.addEventListener('mouseenter', function() { 
      //add event handler so that when mouse enters element.
      this.classList.toggle('red')  
      //the class will toggle to red
    })
    
  }
}
  addHandlersAndToggle();

});