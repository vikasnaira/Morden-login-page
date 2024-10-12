
var btn1 = document.querySelector("#btn1");
var slider = document.querySelector(".box .slider");
var box = document.querySelector(".box");
var cont1 = document.querySelector(".box .cont1");
var vk2 = document.querySelector(".slider #vk2");
var vk3 = document.querySelector(".slider #vk3");
var cont2 = document.querySelector(".box .cont2");
cont2.style.opacity = 0;
virus = 1;
btn1.addEventListener("click", function() {
    // Check the value of virus
    if (virus == 1) {
        this.textContent = "Sign In";
        virus = 0; // Update the virus variable
        gsap.to(slider, {
            left:0 ,
            delay: 0.1,
            duration: 0.2,   
            background : "red",         
        });
        gsap.to(cont1, {
            left:"540px",
            delay: 0.1,
            duration: 0.4,
            opacity:0,
        });
        gsap.to(cont2, {
            left: "540px",
            delay: 0.1,
            duration: 0.2,
            opacity: 1,
            zIndex:1,
        });
        vk2.textContent = "LOGIN WITH EXISTING ACCOUNT";
        vk2.style.textWrap = "wrap";
        vk2.style.fontSize = "25px";
        vk3.textContent = "sign in with us";
    }
    else{
         virus = 1; // Update the virus variable
        this.textContent = "Sign up";
        gsap.to(slider, {
            delay: 0.1,
            left: "540px",
            duration: 0.2,
            opacity:1,
            background : " linear-gradient(rgb(18, 4, 77),rgb(69, 74, 77))"
        });
        gsap.to(cont1, {
            left:0,
            delay: 0.1,
            duration: 0.2,
            opacity:1,
        });
        gsap.to(cont2, {
            left:"-50px",
            delay: 0.1,
            duration: 0.2,
            opacity:0,
            zIndex : -9,
        });
        vk2.textContent = "HELLO, FRIENDS......!";
        vk2.style.textWrap = "NOWrap";
        vk2.style.fontSize = "30px";
        vk3.textContent = "Resister your personal....!   ";
    }
});
