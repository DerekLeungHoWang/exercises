let counter = 0;
document.getElementById('learn-more').addEventListener("click",function(){ //select learn-more by id, assign event listener -- this is what you do on this event
    if(counter === 0){

        // remove overlay
     let overlay = document.getElementById('banner-overlay'); 
        overlay.classList.remove("overlay")

        // change the header
    let titleNode = document.getElementById('title'); //select title
    titleNode.innerHTML = "welcome to my flower shop" //change text using innerHTML
    titleNode.style.backgroundColor = 'blue'; //change styling
   
    // change the button style
    this.innerHTML = "buy flowers";
    this.style.backgroundColor = '#E70E02';

    // uncover hidden element
    let hiddenElement = document.getElementsByClassName('hidden');
    hiddenElement[0].classList.remove("hidden");
    
    // handle counter
    counter ++
    } else {

        // put overlay back
        let overlay = document.getElementById('banner-overlay'); 
        overlay.classList.add("overlay")

    
        // hide hidden element
        let hidden = document.getElementById('styled');
        hidden.classList.add("hidden")

        // toggle the button using a counter
        counter = 0;

        // change the title back to the original 
        let titleNode = document.getElementById('title');
        titleNode.innerHTML = "Beautiful Flowers"
        titleNode.style.backgroundColor = ""

        //change the button back to the beginning
        this.innerHTML = "Learn More"
        this.style.backgroundColor = "#7ED321"
    }
    
});


// Change icon size on hover
let icons = document.getElementsByClassName('icon-imgs'); // select all icons by class

for(let icon of icons){
    icon.addEventListener('mouseenter',function(){ //add event listener for each icon when the mouse enters do this
        this.style.height = "156px"; //get larger
        this.style.width  = "156px";
    });
    icon.addEventListener('mouseleave',function(){ //when mouse leaves do this
        this.style.height = "112px"; //make the icons smaller
        this.style.width  = "112px";
    });
}


let secondButtons = document.getElementsByClassName('hidden-button');

for(let button of secondButtons){
    button.addEventListener('click', function (){
        alert(`You have attempted to buy flowers`)
    })
}
