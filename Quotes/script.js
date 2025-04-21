const allImages = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg"];
const thought = [
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "That it will never come again is what makes life so sweet.",
  "It is never too late to be what you might have been.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Pain is inevitable. Suffering is optional.",
];
const authorName = [
  "-Oscar Wilde",
  "-Emily Dickinson",
  "-George Eliot",
  "-Ralph Waldo Emerson",
  "-Haruki Murakami",
];

const imagesCircle = document.getElementById("image");
imagesCircle.classList.add("image1");
const img1 = document.createElement("img");
imagesCircle.append(img1);
img1.src = "./1.jpeg"; // Default image
img1.classList.add("ig");

let imgIndex = 0;
let quoteIndex = 0;
let authorIndex = 0;

// Set the default quote and author initially
const outerbox = document.querySelector(".outerbox");
const para = document.createElement("h2");
outerbox.append(para);

// Set the default quote and author
para.innerText = thought[quoteIndex];
const italic = document.createElement("i");
outerbox.append(italic);
italic.innerText = authorName[authorIndex];

// Start cycling through quotes, authors, and images after setting the initial content
setInterval(() => {
  para.innerText = thought[quoteIndex];
  quoteIndex = (quoteIndex + 1) % thought.length;
}, 2000);

setInterval(() => {
  italic.innerText = authorName[authorIndex];
  authorIndex = (authorIndex + 1) % authorName.length;
}, 2000);

setInterval(() => {
  img1.src = allImages[imgIndex];
  imgIndex = (imgIndex + 1) % allImages.length;
}, 2000);

// // const allImages=["./images/1.jpeg",  "./images/2.jpeg", "./images/3.jpeg"]

// const thought=["To live is the rarest thing in the world. Most people exist, that is all.",
//     "That it will never come again is what makes life so sweet. ",
//     "It is never too late to be what you might have been.",
//     "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
//     "Pain is inevitable. Suffering is optional."

// ]
// const authorName=[" -Oscar Wilde","-Emily Dickinson","-George Eliot"," -Ralph Waldo Emerson"," -Haruki Murakami"]

// const imagesCircle = document.getElementById("image");
// imagesCircle.classList.add("image1");
// const img1 = document.createElement("img");
// imagesCircle.append(img1);
// img1.src = "./1.jpeg";

// img1.classList.add("ig");
// let index=0;
// // setInterval(()=>{
// //     img1.src = allImages[index];
// //     index=(index+1)%allImages.length

// // }, 1000)

// const outerbox = document.querySelector(".outerbox");
// const para = document.createElement("h2");
// outerbox.append(para);

// setInterval(()=>{
//     para.innerText = thought[index];
//     index=(index+1)%thought.length
// },2000)

// const italic = document.createElement("i");
// outerbox.append(italic);
// imagesCircle.insertAdjacentElement("afterEnd", para);

// setInterval(()=>{
//     italic.innerText = authorName[index];
//     index=(index+1)%authorName.length
// },2000)
