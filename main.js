window.onscroll = function() {stickyNavbar()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var clipboard = document.querySelectorAll(".fa-clipboard");
/*Clipboard Feature*/
clipboard.forEach((elem)=>{
  elem.addEventListener('click',(e)=>{
    var text = e.target.parentElement.textContent;
    navigator.clipboard.writeText(text);
    elem.classList.add('copied')
  })
})


function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    console.log("Navbar sticked to top")
    navbar.classList.add("sticky")
  } else {
    console.log("Cant stick Navbar to top")
    navbar.classList.remove("sticky");
  }
}
