//Global Variables
let intervalId;
//DOM Selectors
const likesCounter = document.querySelector("#counter");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const pauseButton = document.querySelector("#pause");
const heartButton = document.querySelector("#heart");
const likesSelected = document.querySelector(".likes");
const commentForm = document.querySelector("#comment-form");
let commentList = document.querySelector("#list");
//See the timer increment every second once the page has loaded.
function counter(){
    let i = 0;
    intervalId = setInterval(function(){
        i++;
        likesCounter.innerHTML = i;
    }, 1000);
}
counter()
//Manually increment and decrement the counter using the plus and minus buttons.
plusButton.addEventListener("click", function(){
    likesCounter.innerHTML++;
});
minusButton.addEventListener("click", function(){
    likesCounter.innerHTML--;
});
//"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

heartButton.addEventListener("click", function(){
    
    let li = document.createElement("li");
    li.textContent = likesCounter.textContent;
    console.log(li.innerHTML);
   likesSelected.appendChild(li);
});
//Pause the counter, which should:
//pause the counter
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"
pauseButton.addEventListener("click", function(){
    if(pauseButton.innerHTML === "pause"){
        pauseButton.innerHTML = "resume";
        heartButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        clearTimeout(intervalId);
    }
    //not resuming
    else{
        pauseButton.innerHTML = "pause";
        heartButton.disabled = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
        setTimeout(intervalId)  
    }
});
//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
commentForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newComment = event.target.comment.value;
let li = document.createElement("li");
li.textContent = newComment;
commentList.appendChild(li);

  
});