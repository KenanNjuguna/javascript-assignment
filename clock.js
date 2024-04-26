// clock
let hrs = document.querySelector(".time-number1");
let min = document.querySelector(".time-number2");
let sec = document.querySelector(".time-number3");
let greeting = document.getElementById("greeting");

setInterval(() => {
  let time = new Date();
  hrs.innerHTML = (time.getHours() < 10? "0" : "") + time.getHours();
  min.innerHTML = (time.getMinutes() < 10? "0" : "") + time.getMinutes();
  sec.innerHTML = (time.getSeconds() < 10? "0" : "") + time.getSeconds();

  let hour = time.getHours();
  if (hour >= 6 && hour < 12) {
    greeting.innerText = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    greeting.innerText = "Good Afternoon!";
  } else {
    greeting.innerText = "Good Evening!";
  }
}, 1000);
//hamburger
document.addEventListener("DOMContentLoaded", function () {
  const openNavMenuButton = document.getElementById("open-nav-menu");
  const closeNavMenuButton = document.getElementById("close-nav-menu");
  const navMenu = document.querySelector(".wrapper");

  openNavMenuButton.addEventListener("click", function () {
    navMenu.classList.add("nav-open");
  });

  closeNavMenuButton.addEventListener("click", function () {
    navMenu.classList.remove("nav-open");
  });
});
//weather
const weatherData = {
  "Westlands": {
    celsius: {
      temperature: 20,
      description: "partly cloudy",
    },
    fahr: {
      temperature: 68,
      description: "partly cloudy",
    },
  },
  "Westlands": {
    celsius: {
      temperature: 25,
      description: "sunny",
    },
    fahr: {
      temperature: 77,
      description: "sunny",
    },
  },
};

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to update the weather information
function updateWeatherInfo(location, temperatureUnit) {
  const weather = weatherData[location][temperatureUnit];
  const temp =
    temperatureUnit === "celsius"
      ? weather.temperature
      : celsiusToFahrenheit(weather.temperature);
  const message = `Today's weather in ${location} is ${weather.description} with a temperature of ${temp}°${temperatureUnit}.`;
  document.getElementById("weather").innerText = message;
}

// Add event listeners to temperature buttons
document.getElementById("celsius").addEventListener("click", () => {
  updateWeatherInfo("Westlands", "celsius");
});

document.getElementById("fahr").addEventListener("click", () => {
  updateWeatherInfo("Westlands", "fahr");
});

// Initialize the weather info
document.getElementById("fahr").click();
/* change images*/
 var myImage = document.querySelector("#galleryImage");

 function changeImage1(params) {
    myImage.src = "/assets/gallery/image1.jpg";
    
 }
 function changeImage2(params) {
    myImage.src = "/assets/gallery/image2.jpg";
    
 }
 function changeImage3(params) {
    myImage.src = "/assets/gallery/image3.jpg";
    
 }
 // Array of product objects
const products = [
  { title: 'AstroFiction',nameId: 'John Doe', price: 50, image: 'assets/products/img6.png', isFree: false },
  { title: 'Space Odissey',nameId: 'Mary Anne', price: 100, image: 'assets/products/img1.png', isFree: false },
  { title: 'Doomed City',nameId: 'Steve Jobs', price: 200, image: 'assets/products/img2.png', isFree: false },
  { title: 'Black Dog',nameId: 'Alan Walker', price: 300, image: 'assets/products/img3.png', isFree: false },
  { title: 'My Little Robot',nameId: 'Juliette Higgins', price: 0, image: 'assets/products/img5.png', isFree: true },
  { title: 'Garden Girl',nameId: 'Mary Simon', price: 0, image: 'assets/products/img4.png', isFree: true },
];

// Function to generate a single card element
function generateCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.background = '#3c3c3c';
  card.style.margin = '20px';
  card.style.display = 'flex';
  card.style.flexWrap = 'wrap';
  card.style.width = '30%';
  card.style.flexBasis = '25%';

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  img.src = product.image;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const title = document.createElement('h3');
  title.textContent = product.title;
  infoContainer.appendChild(title);

  const name = document.createElement('p');
  name.textContent = product.nameId;
  name.classList.add('border-top');
  infoContainer.appendChild(name);

  const amount = document.createElement('p');
  amount.classList.add('price');
  amount.textContent = 'Price';
  infoContainer.appendChild(amount);

  const price = document.createElement('p');
  price.textContent = `KES:${product.price}`;
  price.classList.add('border-top');
  infoContainer.appendChild(price);

  card.appendChild(infoContainer);
  return card;
}

// Function to display all or filtered products in the card container
function displayItems(filter) {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  let filteredProducts = products;
  if (filter === 'paid') {
    filteredProducts = products.filter(product => product.price > 0);
  } else if (filter === 'free') {
    filteredProducts = products.filter(product => product.price === 0);
  }

  const allQty = filteredProducts.length;
  document.querySelector('.qtyAll').textContent = allQty;
  document.querySelector('.qtyPaid').textContent = filteredProducts.filter(product => product.price > 0).length;
  document.querySelector('.qtyFree').textContent = filteredProducts.filter(product => product.price === 0).length;

  filteredProducts.forEach(product => {
    const card = generateCard(product);
    cardContainer.appendChild(card);
  });
}

// Initialize displaying all products
displayItems('all');