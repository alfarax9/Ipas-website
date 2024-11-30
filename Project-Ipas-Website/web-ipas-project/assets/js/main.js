/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
const buttonVerif=document.querySelector(".verifemail");
const popupvalue=document.querySelector(".popupvalue");
const input=document.querySelector(".emailinput")
const datas=[{
    email: "maulanaalfara38@gmail.com",
    contribute: "ngoding",
},
{
    email:"binta01@gmail.com",
    contribute:"laporan"
},
{
    email:"fatih02@gmail.com",
    contribute:"item project"
},
{
    email:"dicky03@gmail.com",
    contribute:"item project"
},
{
    email:"keiso04@gmail.com",
    contribute:"item project"
},
{
    email:"arfuri05@gmail",
    contribute:"item project"
}
]
buttonVerif.addEventListener("submit",function(e){
    e.preventDefault();
    for(const data of datas){
        if(data.email === input.value){
            popupvalue.classList.toggle("popupactive")
            return alert(data.contribute);
        }
    }
})


/* mengvalidasi jika konstanta ada  */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ==============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // ketika saat ngescroll lebih dari 350 viewport height, tambah sebuah button scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})