/* // // // // // // // //
        NAVBAR
// // // // // // // // */
let pathX = window.location.pathname
let path = pathX.replace("index.html", "");
console.log(path)
// get elements with DOM
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
logo.setAttribute("src", `${path}/assets/images/logo-light-1.png`);
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const navList = document.getElementById("navList");
const navLink = document.querySelectorAll(".nav-link");
const animTanweer = document.getElementById("anim-tanweer");
animTanweer.setAttribute("src", `${path}/tanweer.json`);
// on scroll on webview
window.addEventListener("scroll", ()=> {
    // add active class for nav bar and main=>("html")
    // for change a position and scroll
    navbar.classList.toggle("active", window.scrollY > 0);
    main.classList.toggle("active",  window.scrollY > 0)
    // change a logo and icon from light to dark
        if ( window.scrollY > 0 ) {
            logo.setAttribute("src", `${path}/assets/images/logo-dark-1.png`);
            menu.style.color = 'white';
        } else {
            logo.setAttribute("src", `${path}/assets/images/logo-light-1.png`);
            menu.style.color = 'black';
        }
        function activeNav() {
        if ( window.scrollY > 1060 ) {
            navLink[0].classList.remove("active");
            navLink[1].classList.add("active");
            navLink[2].classList.remove("active");
            navLink[3].classList.remove("active");
        } else {
            navLink[0].classList.add("active");
            navLink[1].classList.remove("active");
            navLink[2].classList.remove("active");
            navLink[3].classList.remove("active");
        }
        if ( window.scrollY > 1728 ) {
            navLink[0].classList.remove("active");
            navLink[1].classList.remove("active");
            navLink[2].classList.add("active");
            navLink[3].classList.remove("active");
        }
        if ( window.scrollY > 2124 ) {
            navLink[0].classList.remove("active");
            navLink[1].classList.remove("active");
            navLink[2].classList.remove("active");
            navLink[3].classList.add("active");
        }
        }
        activeNav();

});
// on resize page
window.addEventListener("resize", ()=> {
    // on width less than 786
    if (window.innerWidth > 786) {
        // make navlist(li) => display flex
        // and make a click : none
        navList.style.display = 'flex';
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].onclick = _ => {}
        }
        // lower than 786
    } else {
            // make navlist(li) => display none
            // make navlist(li) on click => display none
        navList.style.display = 'none';
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].onclick = ()=> {
                navList.style.display = 'none'
            }
        }
    }
})
// on click menu icon
// show and hide nav bar
menu.onclick = ()=> {
    if (navList.style.display == 'none') {
        navList.style.display = 'flex'
    } else {
        navList.style.display = 'none'
    }
}
// go to Pages
const allCourses = document.getElementById("allCourses");
const allBooks = document.getElementById("allBooks");
allCourses.onclick = ()=> {
    window.location = `${path}/pages/courses/courses.html`
}
allBooks.onclick = ()=> {
    window.location = `${path}/pages/books/books.html`
}

//click in btn courses
const joinCourse = document.querySelectorAll(".f__course .btn");
joinCourse.forEach((btn,index) => {
    btn.onclick = ()=> {
        window.location.href = `${path}/pages/viewcourse/view.html?id=${index}`
    }
});
// dir loactoin page 
let loactionBtn = document.getElementById("loactionBtn");
loactionBtn.onclick = ()=> {
    window.location.href = `${path}/pages/location/location.html`
}
// info loaction page
let infoBtn = document.getElementById("infoBtn");
infoBtn.onclick = ()=> {
    window.location.href = `${path}/pages/qapage/info.html`
}