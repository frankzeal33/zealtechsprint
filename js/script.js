const bars = document.querySelector('.bars');
const navbar = document.querySelector('.mobile');
let times = document.querySelector('.fa-times');
let bar = document.querySelector('.fa-bars');
let links = document.querySelectorAll('.mobile .mobile-nav a');

bars.addEventListener('click', () => {
    navbar.classList.toggle('active');
    times.classList.toggle('active');
    bar.classList.toggle('active');
})

links.forEach((link) => {
   link.addEventListener("click", () => {
        navbar.classList.remove('active');
   })
})

//card filter
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        })
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const isVisible = category === 'all' || category ===cardCategory;

            if(isVisible){
                card.style.display = 'inline-block';
                //slide in the card using frame motion
                if(card.style.opacity !== '1'){
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px)';
                    window.requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    })
                }
            }else{
                //slide out the card using frame motion
                if(card.style.opacity !== '0'){
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    window.requestAnimationFrame(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(50px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300)
                    })
                }
            }
        })
    })
})
//card end




const navlinks = document.querySelectorAll('#mainnav li a');

//function to check if an element is in viewport
const isInviewport = (element) => {
    const rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

//handle scroll event

const handleScroll = () => {
    navlinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId)

        if(isInviewport(targetSection)){
            navlinks.forEach(l => l.classList.remove('activenav'));
            link.classList.add('activenav')
        }
    })
}

let goToTop = document.querySelector('.go-to-top');
window.addEventListener('scroll', () => {
    handleScroll();
    
    navbar.classList.remove('active');
    times.classList.remove('active');
    bar.classList.remove('active');

    //Scrolling Button Btn
    if(this.scrollY > 1000){
        goToTop.classList.add("show");
    }else{
        goToTop.classList.remove("show");
    }
})

handleScroll(); 




