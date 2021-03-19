const navbar = document.querySelector('.nav-bar');
const nav1 = document.getElementById('link-1');
const nav2 = document.getElementById('link-2');
const nav3 = document.getElementById('link-3');
const nav4 = document.getElementById('link-4');
const nav5 = document.getElementById('link-5');

window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.add('nav-active');
    } 
    else {
        navbar.classList.remove('nav-active');
    }
    if ( window.scrollY > 0 && window.scrollY < 900 ) {
        nav1.classList.add('nav-1')
        nav2.classList.remove('nav-2');
        nav3.classList.remove('nav-3');
        nav4.classList.remove('nav-4')
        nav5.classList.remove('nav-5')
    }
    else if ( window.scrollY > 900 && window.scrollY < 2000) {
        nav1.classList.remove('nav-1');
        nav2.classList.add('nav-2');
        nav3.classList.remove('nav-3');
        nav4.classList.remove('nav-4')
        nav5.classList.remove('nav-5')
    }
    else if ( window.scrollY > 2000 && window.scrollY < 2700 ) {
        nav1.classList.remove('nav-1');
        nav2.classList.remove('nav-2');
        nav3.classList.add('nav-3');
        nav4.classList.remove('nav-4')
        nav5.classList.remove('nav-5')
    }
    else if ( window.scrollY > 2700 && window.scrollY < 4500) {
        nav1.classList.remove('nav-1');
        nav2.classList.remove('nav-2');
        nav3.classList.remove('nav-3');
        nav4.classList.add('nav-4')
        nav5.classList.remove('nav-5')
    }
    else if ( window.scrollY > 4900) {
        nav1.classList.remove('nav-1');
        nav2.classList.remove('nav-2');
        nav3.classList.remove('nav-3');
        nav4.classList.remove('nav-4')
        nav5.classList.add('nav-5')
    }

};


window.onload = pageload;
const btnall = document.getElementById('btnAll');
const btncss = document.getElementById('btnCss');
const btnjava = document.getElementById('btnJava');
function pageload() {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java')

    btnall.classList.add('buttonAll');
    btncss.classList.remove('buttonCss');
    btnjava.classList.remove('buttonJava');

    ShowAll.style.display = 'grid';
    ShowCss.style.display = 'none';
    ShowJava.style.display = 'none';
}

btnall.addEventListener('click',pageload);



const ShowCssFunC = () => {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java');
    
    ShowCss.style.display = 'grid';
    ShowAll.style.display = 'none';
    ShowJava.style.display = 'none';
    
    btnall.classList.remove('buttonAll');
    btncss.classList.add('buttonCss');
    btnjava.classList.remove('buttonJava');
        
}
btncss.addEventListener('click',ShowCssFunC);

const ShowJava = () => {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java')

    btnall.classList.remove('buttonAll');
    btncss.classList.remove('buttonCss');
    btnjava.classList.add('buttonJava');

    ShowAll.style.display = 'none';
    ShowCss.style.display = 'none';
    ShowJava.style.display = 'grid';
}
btnjava.addEventListener('click',ShowJava);