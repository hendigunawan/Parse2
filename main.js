window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const offset = window.pageYOffset;
  // console.log(navbar);
  if (offset > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const target = document.querySelector('.target');
    const targetpos = target.offsetTop;
    const scrollop = {
        top: targetpos,
        left: 0,
        behavior: 'smooth'
    }
    window.scrollTo(scrollop);
});

const images = [
  {
    url: "assets/Image assets/Home/Gallery 1.jpg",
    text: "COFFEE",
  },
  {
    url: "assets/Image assets/Home/Gallery 2.jpg",
    text: "BREAKFAST",
  },
  {
    url: "assets/Image assets/Home/Gallery 3.jpg",
    text: "SANDWICH",
  },
  {
    url: "assets/Image assets/Home/Gallery 4.jpg",
    text: "JUICE",
  },
];

const ul = document.getElementById("imagelist");

// Loop through the NodeList object.
for (let i = 0; i <= images.length - 1; i++) {
  const li = document.createElement("li");
  const textOverlay = document.createElement("div");
  const img = document.createElement("img");
  textOverlay.classList.add("text-overlay");
  textOverlay.textContent = images[i].text;

  textOverlay.style.backgroundImage = `url("${images[i].url}")`;
//   img.src = images[i].url;
  li.appendChild(textOverlay);
//   li.appendChild(img);
  ul.appendChild(li);
  console.log(li);
}

const svg = [
    {
      url: "assets/Icons/Icon/battery-full.svg",
      text: "BOOST ENERGY LEVEL",
    },
    {
      url: "assets/Icons/Icon/sun.svg",
      text: "REDUCE DEPRESSION",
    },
    {
      url: "assets/Icons/Icon/weight.svg",
      text: "AID IN WEIGHT LOSS",
    }
  ];
  
  const svgul = document.getElementById("svg");
  
  // Loop through the NodeList object.
  for (let i = 0; i <= svg.length - 1; i++) {
    const li = document.createElement("li");
    const textOverlay = document.createElement("div");
    const img = document.createElement("img");
    textOverlay.classList.add("text-svg");
    textOverlay.textContent = svg[i].text;
    img.src = svg[i].url;
  
    // textOverlay.style.backgroundImage = `url("${svg[i].url}")`;
    li.appendChild(img);
    li.appendChild(textOverlay);
    svgul.appendChild(li);
    console.log(li);
  }