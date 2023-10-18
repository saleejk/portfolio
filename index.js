let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll= () =>{
    let header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>100);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}
    
function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email"). value ,
        message : document.getElementById("msg").value
    }
    emailjs.send("service_ivgcubh", "template_6slc9ce", params)
    .then(
        message => {
          if(message != "OK"){
              swal("Successful", "You clicked the button!", "success");
          }
          else{
              swal("Error", "You clicked the button!", "Error");
          }
        }
      );
}