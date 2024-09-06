var typed = new Typed(".text", {
    strings: ["Tech Enthusiastic"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    // Loop through all tab links and remove the "active-link" class
    tablinks.forEach(function(tablink) {
        tablink.classList.remove("active-link");
    });

    // Loop through all tab contents and remove the "active-tab" class
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove("active-tab");
    });

    // Find the tab content with the specified tabname and add the "active-tab" class
    var tabContentToShow = document.getElementById(tabname);
    setTimeout(function() {
        tabContentToShow.classList.add("active-tab");
    }, 500); // 1000 milliseconds (1 seconds)


    // Find the tab link corresponding to the tab content and add the "active-link" class
    var tabLinkToActivate = document.querySelector(".tab-links[data-tab='" + tabname + "']");
    tabLinkToActivate.classList.add("active-link");
}



var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}



// Function to check if an element is partially in the viewport
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < windowWidth &&
        rect.top < windowHeight
    );
}

// Function to handle scroll event
function handleScroll() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        if (isPartiallyInViewport(element)) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

// Initial check on page load
handleScroll();

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);


