let breakingnews = document.getElementById("spongebob")
console.log(breakingnews)
// Use get elemnt by id : spongebob to select the variable name breaking news button and console.log the button by its variable name breaking news to make sure you got the correct value
let surfing = document.getElementById("surfers")
console.log(surfing)
// Use get element by id : surfers to select the variable name surfing image and console.log the surfing by its variable name to make sure you got the correct value

let body = document.body
console.log(body)
// retrive the documents body and assign it to the variable name body,console.log it by its variable name body in order to make sure you got the correct value.

breakingnews.addEventListener("mouseover",function(event){
  console.log("mouseover breaking news")
  document.body.style.backgroundColor = "black";
  body.style.setProperty('background-color', 'black', 'important')
})
// add an event listener of mouseover to breaking news that console.logs "mouseover breaking news" in the js to ensure youre selecting the correct action, the mouseover event turns the documents body into the backgrounds color black
breakingnews.addEventListener("click",function(event){
  console.log("click breaking news")
  if(!surfing.innerHTML.includes("video")){
  surfing.innerHTML = '<video width="40%" controls><source src="videos/bikini.mp4" type="video/mp4"></video>'
  }
})
// add an event listener of click to  breaking news that console.logs "click breaking news" in the js to ensure youre selecting the correct action, an if staement is embeded in the click event that if!surfing.innerHTML.includes("video")) evaluates to true, it adds a a video to the surfing element
let breakingnews2 = document.getElementById("citizens")
console.log(breakingnews2)
// Use get elemnt by id : citizens to select the variable name breaking news2 button and console.log the button by its variable name breaking news2 to make sure you got the correct value
breakingnews2.addEventListener("mouseover",function(event){
  if(!surfing.innerHTML.includes("video")){
  surfing.innerHTML = '<video width="40%" controls><source src="videos/citizens.mp4" type="video/mp4"></video>'
  }
})
// add an event listener of mouseover to breaking news2 , the if statement presented checks if the innerHTML of the surfing elemmt doenst already include a video, if no video is present a video element of citizens is presneted in the surfing element