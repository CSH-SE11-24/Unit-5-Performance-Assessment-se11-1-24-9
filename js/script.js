let firsttrain = document.getElementById("firsttrain")
console.log(firsttrain)
firsttrain.addEventListener("mouseover",function(event){
  // Select the one train by its id "firsttrain" and console.log the one train by its variable name firsttrain to make sure you slected the correct value. Then you add an event listener of mouse over to the variable.
if(!firsttrain.innerHTML.includes("iframe")){
  // Make a conditional - if statement that ensures that the iframe is only added to the firsttrain element if it already doesnt have one.
     firsttrain.innerHTML = '<iframe width="100%" src="https://www.youtube.com/embed/AA4apfjO9dM" title="Victim speaks out after subway screwdriver attack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  }
})
  // This line of code sets the inner html of the first train element to a string containing the iframe tag - which is embedding a youtoube video of a crime on the one train.when the mouse is over the the first train element it replaces whats existing in the first train elment which is the image into the youtube video.
firsttrain.addEventListener("mouseout",function(event){
    firsttrain.innerHTML = '<img src = "train images/1train.png">'
  })
  //The added event lisntener of mouseout on the variable firsttrain replaces whats existing in the firstrains inner html elememt (i frame youtube video) too the 1 train picture.
  
// Next onto 2 train
  let secondtrain = document.getElementById("2train")
  console.log(secondtrain)
//Select the two train by its id "2train" and console.log the two train by its variable name secondtrain to make sure you selected the correct value. Then you add an event listener of mouse over to the variable
secondtrain.addEventListener("mouseover",function(event){
    secondtrain.textContent = "Police say this past Sunday, a 48-year-old man was on board a No. 2 train at the 96th Street station when someone pulled a knife on him. The suspect used anti-ethnic slurs toward the victim and demanded his money"
  })
// The mouseover on the 2train image allows you to read the etxt cntent of a crime that occured on the 2 train
  secondtrain.addEventListener("mouseout",function(event){
    secondtrain.innerHTML = '<img src = "train images/2train.png">'
  })
// The added mouseout event listener on the second train sets the innerHTML of its elemnt to display an image of 2train.png

  // Next Onto 3 train
  let thirdtrain = document.getElementById("3train")
  console.log(thirdtrain)
//Select the three train by its id "3train" and console.log the three train by its variable name thirdtrain to make sure you selected the correct value. Then you add an event listener of mouse over to the variable
   thirdtrain.addEventListener("mouseover",function(event){
    if(!thirdtrain.innerHTML.includes("iframe")){
      thirdtrain.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IP7KIAoSgkw?si=1QRwh6ofSofFb_QV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  })
    // This line of code sets the inner html of the third train element to a string containing the iframe tag - which is embedding a youtoube video of a crime on the 3 train.when the mouse is over the the third train element it replaces whats existing in the third train elment which is the image into the youtube video.
thirdtrain.addEventListener("mouseout",function(event){
      thirdtrain.innerHTML = '<img src = "train images/3train.png">'
    })
// The added mousoeut event on the third train element sets the innerHTML of its elemnt to display an image of 3train.png

    // next onto the 4
let fourthtrain = document.getElementById("fourtrain")
console.log(fourthtrain)
fourthtrain.addEventListener("mouseover", function(event){
  // Select the four train by its id "fourtrain" and console.log the four train by its variable name fourthtrain to make sure you selected the correct value. Then you add an event listener of mouse over to the variable.
if(!fourthtrain.innerHTML.includes("video")){
  // Make a conditional - if statement that ensures that the iframe is only added to the fourthtrain element if it already doesnt have one.
     fourthtrain.innerHTML = '<video width="100%" controls><source src="videos/eden.mp4" type="video/mp4"></video>'
  }
})
   // This line of code sets the inner html of the fourth train element to a string containing the video tag - which is sourcing a video file "eden.mp4".when the mouse is over the the fourth train element it replaces whats existing in the fourth train element which is the image into the eden.mp4 video. 
fourthtrain.addEventListener("mouseout",function(event){
    fourthtrain.innerHTML = '<img src = "train images/4train.png" >'
  })
  //The added event lisntener of mouseout on the variable fourthtrain replaces whats existing in the fourthtrains inner html elememt (eden.mp4 video) too the 4 train picture.

// next onto five train
  
  let fifthtrain = document.getElementById("fivetrain")
  console.log(fifthtrain)
  fifthtrain.addEventListener("mouseover",function(event){
    if(!fifthtrain.innerHTML.includes("iframe")){
    fifthtrain.innerHTML = '<iframe width="100%" src="https://www.youtube.com/embed/mbBYGVK6Fmo?si=bpEOte3yywzL3wct" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  })
  fifthtrain.addEventListener("mouseout",function(event){
    fifthtrain.innerHTML = '<img src = "train images/5train.png">'
  })
// next onto six train

let sixthtrain = document.getElementById("sixtrain")
console.log(sixthtrain)
sixthtrain.addEventListener("mouseover",function(event){
  if(!sixthtrain.innerHTML.includes("video")){
     sixthtrain.innerHTML = '<video width="100%" controls><source src="videos/slash.mp4" type="video/mp4"></video>'
  }
})
sixthtrain.addEventListener("mouseout",function(event){
  sixthtrain.innerHTML = '<img src = "train images/6train.png" >'
})
    // next onto the 7 
     let seventhtrain = document.getElementById("seventrain")
    console.log(seventhtrain)
    seventhtrain.addEventListener("mouseover",function(event){
  if(!seventhtrain.innerHTML.includes("video")){
         seventhtrain.innerHTML = '<video width="100%" controls><source src="videos/7traincrime.mp4" type="video/mp4"></video>'
      }
    })
seventhtrain.addEventListener("mouseout",function(event){
  seventhtrain.innerHTML = '<img src = "train images/7train.png">'
})

let atrain = document.getElementById("atrain")
  console.log(atrain)
// selecet the a train image by its id atrain and set it to the variable atrain,console.log the variable name atrain to ensure the value slected is correct
atrain.addEventListener("mouseover",function(event){
      if(!atrain.innerHTML.includes("iframe")){
    atrain.innerHTML ='<iframe width="400" src="https://www.youtube.com/embed/nD9Xi8-H0-I?si=5oZf_OiaKaM-_2vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      }
      // This line of code sets the inner html of the a train element to a string containing the iframe tag - which is embedding a youtoube video of a crime on the a train.when the mouse is over the the a train element it replaces whats existing in the a train elment which is the image into the youtube video.
    })
atrain.addEventListener("mouseout",function(event){
  atrain.innerHTML = '<img src = "train images/atrain3.png">'
})
// when you mouseout whats in the a trains inner html turns into the atrain.png 
let btrain = document.getElementById("btrain")
console.log(btrain)
// selecet the b train image by its id btrain and set it to the variable btrain,console.log the variable name btrain to ensure the value slected is correct
btrain.addEventListener("mouseover",function(event){
  if(!btrain.innerHTML.includes("iframe")){
    btrain.innerHTML ='<iframe width="400" src="https://www.youtube.com/embed/yK1VRYyPqyk?si=HNZhO5C2rahPaRHh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      }
   // This line of code sets the inner html of the b train element to a string containing the iframe tag - which is embedding a youtoube video of a crime on the b train.when the mouse is over the the b train element it replaces whats existing in the b train elment which is the image into the youtube video.
  
})
btrain.addEventListener("mouseout",function(event){
  btrain.innerHTML = '<img src = "train images/btrain.png">'
})
// when you mouseout whats in the b trains inner html turns into the btrain.png 

let ctrain = document.getElementById("ctrain")
console.log(ctrain)
// selecet the c train image by its id c train and set it to the variable ctrain,console.log the variable name ctrain to ensure the value slected is correct
ctrain.addEventListener("mouseover",function(event){
  if(!ctrain.innerHTML.includes("iframe")){
    ctrain.innerHTML = '<iframe width="400" src="https://www.youtube.com/embed/OD1F8UPdQAE?si=7GNPKaMi-t5_5X7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      }
  // This line of code sets the inner html of the c train element to a string containing the iframe tag - which is embedding a youtoube video of a crime on the c train.when the mouse is over the the c train element it replaces whats existing in the c train elment which is the image into the youtube video.
})
ctrain.addEventListener("mouseout",function(event){
  ctrain.innerHTML = '<img src = "train images/ctrain.png">'
})
// when you mouseout whats in the c trains inner html turns into the c train.png 





  




