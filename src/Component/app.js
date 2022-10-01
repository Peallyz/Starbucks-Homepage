const headerNav = document.querySelectorAll(".main__nav li");
const sideNav = document.querySelector("#side__nav");

const hamburgerBtn = document.querySelector(".hamburger");
let mobileNavbar = false;

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
        mobileNavbar = false;
    } else if (hamburgerBtn.getAttribute("class") !== "hamburger active") {
        hamburgerBtn.classList.add("active");
        mobileNavbar = true;
    }
};

hamburgerBtn.addEventListener("click", () => handleHamburgerBtn());
//

// Gestion de la Nav "More"

const handleNavMore = () => {
    if (
        headerNav[7].getAttribute("class") === null ||
        headerNav[7].getAttribute("class") === ""
    ) {
        headerNav[7].classList.add("active");
    } else if (headerNav[7].getAttribute("class") === "active") {
        headerNav[7].classList.remove("active");
    }
};

headerNav[7].addEventListener("click", () => handleNavMore());

//

//////////////////////////////
