/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// function submitForm()
// {
// let form = document.getElementById("form_submit");
//      form.submit();
// alert("Message Send Successfully");
// }

 function validateForm()  
 {
      var name = document.forms["contactForm"]["name"].value;
      var email = document.forms["contactForm"]["email"].value;
      var message = document.forms["contactForm"]["message"].value;
      var error = "";

     if (name == "") 
      {
          error += "Please enter your name.\n";      }
      if (email == "") 
      {
         error += "Please enter your email address.\n";
      } else if (!validateEmail(email)) 
      {
          error += "Please enter a valid email address.\n";
      }
            if (message == "") 
     {        error += "Please enter a message.\n";
      }
      if (error != "") 
      {
         alert("message successfully install");
          return false;
      }
  }    
  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
   }

  //**CONTACT FORM 
  const form = document.getElementById('contact-form');
  form.addEventListener('submit',(event) =>
  {
     event.preventDefault();

     const name = form.elements.name.value;
    const email = form.elements.email.value;
     const message = form.elements.message.value;

     if(name && email && message)
     {
         alert("Message Send Successfully!!!!");
     }
     else{
         alert("Message Not Send");
     }
     form.request();
  } );
