let a = document.querySelector("#a")
console.log(a)
let c = document.querySelector("#c")
console.log(c)
let t = document.querySelector("#t")
console.log(t)
let i = document.querySelector("#i")
console.log(i)
let o = document.querySelector("#o")
console.log(o)
let n = document.querySelector("#n")
console.log(n)
// select the elements with its aligned id and assign it to their aligned variables.Console.log the variable names to ensure you selcted the right value.
a.addEventListener("click",function(event){
  a.textContent = "Adams Is Directing NYC Into Terror"
  window.location.href = "https://www.thecity.nyc/2022/02/27/adams-plan-to-remove-homeless-people-from-the-subway-right-away-has-hit-a-delay/#:~:text=Kathy%20Hochul%2C%20Subway-,Adams%20Plan%20to%20Remove%20Homeless%20People%20From%20the%20Subway%20'Right,by%20Greg%20B."
})
// add an event listener of click to the variable a that releases text content and spawns the window to link/source of my text

//https://www.w3schools.com/js/js_window_location.asp is my source for the use of window.location.href
c.addEventListener("click",function(event){
  c.textContent = "Cops Demand $2.90 fare so the least us Commuters demand is a reliable service"
})
t.addEventListener("click",function(event){
  t.textContent = "Transit Accesebility Needs Measures"
})
i.addEventListener("click",function(event){
  i.textContent = "Individuals can make a difference"
})
o.addEventListener("click",function(event){
  o.textContent = "Opression isnt Okay"
})
n.addEventListener("click",function(event){
  n.textContent = "Neglecting this issue isnt a problem"
})
// give an event listner of click to the elements c,t,i,o, and n that release tetx context

let action = document.querySelectorAll("action")
console.log(action)

for(let i = 0; i<action.length;i++){
  action[i].textContent = action[i].textContent.toUpperCase();
}
// converts the text content of the variable action to uppercase using a for loop and to Upper Case method 