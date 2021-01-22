/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * <li> <a href= '#section1' >Section 1</a></li> 
*/

/**
 * Define Global Variables
 * 
*/
const mySections = document.getElementsByClassName('my-sections')
console.log(mySections)
const navWrapper = document.getElementById('navbar__list');

//  End Global Variables

//  Start Helper Functions
// To show active section 
const highlightActivePart = (active) =>{
    let currentActive = document.getElementsByClassName("nav__active");
     if (currentActive.length>0){
                    currentActive[0].className = currentActive[0].className.replace("nav__active"," ");
                } 
                active.className = "nav__active";
}
//  End Helper Functions 

// Begin Main Functions
// to create navigation list items
/* <li> <a href= '#section1' >Section 1</a></li>  */ 
    
    const createNavListItem = (id,content) =>{
    const navList= document.createElement('li');
    const navTag = document.createElement('a');
    navTag.href = '#' + id;
    navTag.textContent = content;
    navList.addEventListener('click', function(){
        highlightActivePart(this)
    });
    navList.appendChild(navTag);
    // console.log(navList)
    return navList;
}


// To create nav bar/menu

const createNavBar = (sections) =>{
    // Get the id of navigation list (to select navigation list), this gave us the<ul>
    // const navWrapper = document.getElementById('navbar__list');
    // To move through list of sections and get the sections id and the data_nav name
    for (let i=0; i<sections.length; i++){
        // console.log(sections[i])
        let sectionId = sections[i].id;
        let menuName = sections[i].dataset.nav;
        // console.log(sectionId,menuName);
        // to create the bar using the id and menu name
        let listItem = createNavListItem(sectionId,menuName);
        // console.log(listItem);
        navWrapper.appendChild(listItem);
    }
    // make the first item active
    navWrapper.children[0].classList.add("nav__active")
}
createNavBar(mySections)
// End Main Functions

// Add class 'active' to section when near top of viewport
// To show the section currently being scrolled
const showActiveSection = (sections) => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
        let pageTop = document.documentElement.scrollTop + 100;
        for (let i=0; i<sections.length; i++){
            let sectionHeight = sections[i].offsetHeight;
            let sectionTop = sections[i].offsetTop;
            // console.log(sectionHeight, sectionTop);
            if (pageTop>sectionTop && pageTop<sectionTop+sectionHeight){
                // console.log("section" + i + "is active")
                // to select a href
                let showSection = document.querySelector("a[href= '#"+sections[i].id+"']")
                // to get <li a href... 
                // console.log(showSection.parentElement)
                let sectionNav = showSection.parentElement;
// Add class 'active' to section when near top of viewport
                highlightActivePart(sectionNav)
            }
        }

// To show navigation bar when user scrolls up and hide the bar when user scrolls down        
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("pageheader").style.top = "0";
        } else {
            document.getElementById("pageheader").style.top = "-100px";
        }
         prevScrollpos = currentScrollPos;
    }
        
}
    
    

showActiveSection(mySections)



    


    
    








 
 