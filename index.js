const navBarMenu = document.querySelector(".navbar .links ");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navBarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login_btn");
const formPopup = document.querySelector(".form-popup ");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const loginSignupLink = formPopup.querySelectorAll(" .bottom-link a ");


// show mobile menu 
menuBtn.addEventListener("click", function(){
    navBarMenu.classList.toggle("show-menu");
});
// hide mobile menu 
hideMenuBtn.addEventListener("click", function(){
    menuBtn.click()});
// show popup 
showPopupBtn.addEventListener("click", (function() {
    document.body.classList.toggle("show-popup");
}));
// hide popup 
hidePopupBtn.addEventListener("click", (function() {
    showPopupBtn.click()
}))

loginSignupLink.forEach(link =>{
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    })
});