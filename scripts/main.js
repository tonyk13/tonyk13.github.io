const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/32408.jpg") {
    myImage.setAttribute("src", "images/hqdefault.jpg");
  } else {
    myImage.setAttribute("src", "images/32408.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to the OVO sweatshop, ${myName}`;
    }
  }
  

myButton.onclick = () => {
    setUserName();
};