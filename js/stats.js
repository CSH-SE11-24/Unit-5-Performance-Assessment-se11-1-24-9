let change1 = document.getElementById("police")
console.log(change1)
// selecet the image by its id police and set it to the variable change1,console.log the variable name change 1 to ensure the value slected is correct
change1.addEventListener("click",function(event){
  change1.src = "nationalgaurd.webp"
})
// add an event listener of click to change 1 variable that changes the image of police to national gaurd