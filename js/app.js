const wrapper = document.querySelector(".slideWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products =[
  {
    id: 1,
    title: "Fluffy sandals",
    price: 2000,
    colors: [
      {
        code: "brown",
        img: "./img/fluffy white background.jpg",
      },
      {
        code: "darkblue",
        img: "./img/fluffy sandals green.jpg",
      },
    ]
  },
  {
    id: 2,
    title: "Lilac sandals",
    price: 1800,
    colors:[
      {
        code: "black",
        img: "./img/lilac sandals black.jpg",
      },
      {
        code: "pink",
        img: "./img/lilac sandals pink.jpg",
      },
      {
        code: "white",
        img: "./img/lilac sandals white.jpg",
      },
      {
        code: "red",
        img: "./img/lilac sandals red.jpg",
      },
      {
        code: "yellow",
        img: "./img/lilac sandals yellow.jpg",
      },
    ]
  },
  {
    id: 3,
    title: "Jordan 1 low Travisscott New Season",
    price: 3500,
    colors: [
      {
        code: "blue",
        img: "./img/jordan 1 low travis scott rear view.jpg",
      },
    ]
  },
  {
    id: 4,
    title: "Chain sandals",
    price: 2100,
    colors: [
      {
        code: "pink",
        img: "./img/chain sandals pink.jpg",
      },
      {
        code: "red",
        img: "./img/chain sandals red.jpg",
      },
      {
        code: 'white',
        img: "./img/chain sandals white.jpg",
      },
    ]
  },
  {
    id: 5,
    title: "Adidas Samba New Season",
    price: 3200,
    colors: [
      {
        code: "black",
        img: "./img/adidas samba black, white stripes.jpg",
      },
      {
        code: "white",
        img: "./img/adidas samba white,black stripes.jpg",
      },
      {
        code: "white",
        img: "./img/adidas samba whte.jpg",
      },
    ]
  },
    {
       id: 6,
    title: "Airmax TM New Season",
    price: 3300,
    colors:[
      {
        code: "gold",
        img: "./img/airmax. TM golden.jpg",
      },
      {
        code: "green",
        img: "./img/airmax.TM green.jpg",
      },
      {
        code: "black",
        img: "./img/airmax TM black.jpg"
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "ksh" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Pass new colors
    currentProductColors.forEach((colorElement, colorIndex) => {
      colorElement.style.backgroundColor = choosenProduct.colors[colorIndex].code;
    });
  });
});
currentProductColors.forEach((color, index)=>{
  color.addEventListener("click", () =>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor= "black"
    size.style.color= "white"
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
});

  close.addEventListener("click",()=>{
  payment.style.display="none";
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slider');

function showSlide(index) {
  slides.forEach((slider, i) => {
    slides.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

setInterval(nextSlide, 3000); // Change slider every 3 seconds
