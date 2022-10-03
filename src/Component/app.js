const headerNav = document.querySelectorAll(".main__nav li");
const sideNav = document.querySelector("#side__nav");
const mobileNav = document.querySelector(".header__container");
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu__li");
const sideMenu = document.querySelector(".header__right");
const menuReturn = document.querySelector(".menu__return");
const faqList = document.querySelectorAll(".faq__li");

//Header et Header Navbar

// Gère la transition mobile / desktop de la nav bar

const createLi = (text) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    const textNode = document.createTextNode(text);
    anchor.setAttribute("href", "#");
    anchor.appendChild(textNode);
    li.setAttribute("class", text.toLowerCase().split(" ").join(""));
    li.appendChild(anchor);
    return li;
};

const deleteLi = (className) => {
    let carriereSide = document.querySelector(className);
    if (carriereSide !== null) {
        sideNav.removeChild(carriereSide);
    }
};

const deleteAllLi = () => {
    deleteLi(".carriere");
    deleteLi(".serviceclient");
    deleteLi(".delivers");
    deleteLi(".rewards");
    deleteLi(".nutrition");
};

const handleNavBehavior = (size) => {
    if (size < 1420 && size >= 1250) {
        deleteAllLi();

        sideNav.appendChild(createLi("Carriere"));
    } else if (size < 1250 && size >= 1100) {
        deleteAllLi();

        sideNav.appendChild(createLi("Service Client"));
        sideNav.appendChild(createLi("Carriere"));
    } else if (size < 1100 && size >= 1050) {
        deleteAllLi();

        sideNav.appendChild(createLi("Rewards"));
        sideNav.appendChild(createLi("Delivers"));
        sideNav.appendChild(createLi("Service Client"));
        sideNav.appendChild(createLi("Carriere"));
    } else if (size < 1050 && size >= 770) {
        deleteAllLi();

        sideNav.appendChild(createLi("Nutrition"));
        sideNav.appendChild(createLi("Rewards"));
        sideNav.appendChild(createLi("Delivers"));
        sideNav.appendChild(createLi("Service Client"));
        sideNav.appendChild(createLi("Carriere"));
    } else if (size < 770) {
        deleteAllLi();
    }
};

handleNavBehavior(window.innerWidth);

window.addEventListener("resize", () => handleNavBehavior(window.innerWidth));

//

// Ouverture de la Navbar format mobile

const handleHamburgerBtn = () => {
    if (hamburgerBtn.getAttribute("class") === "hamburger active") {
        hamburgerBtn.classList.remove("active");
        mobileNav.classList.remove("active");
        document.querySelector("body").style.overflowY = "auto";
    } else if (hamburgerBtn.getAttribute("class") !== "hamburger active") {
        hamburgerBtn.classList.add("active");
        mobileNav.classList.add("active");
        document.querySelector("body").style.overflowY = "hidden";
    }
};

const handleSideMenu = (e) => {
    if (e.getAttribute("class") === "main__li menu__li") {
        menu.setAttribute("class", "main__li menu__li active");
        sideMenu.setAttribute("class", "header__right active");
    }
    if (e.getAttribute("class") === "menu__return") {
        menu.setAttribute("class", "main__li menu__li");
        sideMenu.setAttribute("class", "header__right");
    }
};

hamburgerBtn.addEventListener("click", () => handleHamburgerBtn());
menu.addEventListener("click", (e) => handleSideMenu(e.target));
menuReturn.addEventListener("click", (e) => handleSideMenu(e.target));

//

// Gestion de la Nav "More"

const handleNavMore = () => {
    if (
        headerNav[10].getAttribute("class") === null ||
        headerNav[10].getAttribute("class") === "main__li"
    ) {
        headerNav[10].classList.add("active");
    } else if (headerNav[10].getAttribute("class") === "main__li active") {
        headerNav[10].classList.remove("active");
    }
};

headerNav[10].addEventListener("click", () => {
    handleNavMore();
});

//

//////////////////////////////

// Footer

const handleTreeMenu = (el) => {
    switch (el.getAttribute("id")) {
        case "about":
            if (el.getAttribute("class") === "faq__li") {
                el.classList.add("active");
            } else if (el.getAttribute("class") === "faq__li active") {
                el.classList.remove("active");
            }

            break;
        case "contact":
            if (el.getAttribute("class") === "faq__li") {
                el.classList.add("active");
            } else if (el.getAttribute("class") === "faq__li active") {
                el.classList.remove("active");
            }
            break;
        case "impact":
            if (el.getAttribute("class") === "faq__li") {
                el.classList.add("active");
            } else if (el.getAttribute("class") === "faq__li active") {
                el.classList.remove("active");
            }
            break;
        case "carte":
            if (el.getAttribute("class") === "faq__li") {
                el.classList.add("active");
            } else if (el.getAttribute("class") === "faq__li active") {
                el.classList.remove("active");
            }
            break;

        default:
            break;
    }
};

faqList.forEach((el) =>
    el.addEventListener("click", (e) => handleTreeMenu(e.target.parentNode))
);

//////////////////////////
