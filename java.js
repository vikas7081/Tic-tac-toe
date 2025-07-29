// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// scroll sections 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links 
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                // sec.classList.replaceadd('show-animate');
            })
            // active section for animation 
            sec.classList.add('show-animate');
        }
        
        // else {
        //     sec.classList.remove('show-animate');
        // }
    })


    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click nav bar link {scroll} 
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer in scroll 
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// home word change 

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letter = word.textContent.split("");
    word.textContent="";
    letter.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};

changeText();
setInterval(changeText,3000);


