let more = document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    })
}

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

let products = {
  data: [
    {
      productName: "На закате",
      category: "Море",
      price: "4 990",
      image: "..//catalog/images/1.jpg",
    },
    {
      productName: "Летний вечер",
      category: "Лес",
      price: "7 500",
      image: "..//catalog/images/2.jpg",
    },
    {
      productName: "Локтём палитру опрокинул",
      category: "Абстракция",
      price: "12 590",
      image: "..//catalog/images/3.jpg",
    },
    {
      productName: "Пока спал, ребёнок добрался до красок",
      category: "Абстракция",
      price: "27 859",
      image: "..//catalog/images/4.jpg",
    },
    {
      productName: "Путь",
      category: "Море",
      price: "5 200",
      image: "..//catalog/images/5.jpg",
    },
    {
      productName: "Обмазывал об холст излишки краски с кисти",
      category: "Абстракция",
      price: "39 900",
      image: "..//catalog/images/6.jpg",
    },
    {
      productName: "по грибы",
      category: "Лес",
      price: "4 750",
      image: "..//catalog/images/7.jpg",
    },
    {
      productName: "Сосед",
      category: "Люди",
      price: "18 700",
      image: "..//catalog/images/8.jpg",
    },
    {
      productName: "В Ожидании",
      category: "Люди",
      price: "12 400",
      image: "..//catalog/images/9.jpg",
    },
    {
      productName: "Спокойствие",
      category: "Лес",
      price: "4 990",
      image: "..//catalog/images/10.jpg",
    },
    {
      productName: "Основатели",
      category: "Море",
      price: "7 500",
      image: "..//catalog/images/11.jpg",
    },
    {
      productName: "Сплетницы",
      category: "Люди",
      price: "12 590",
      image: "..//catalog/images/12.jpg",
    },
    {
      productName: "Как ни странно, фонарь",
      category: "Абстракция",
      price: "27 859",
      image: "..//catalog/images/13.jpg",
    },
    {
      productName: "Воспоминание",
      category: "Абстракция",
      price: "5 200",
      image: "..//catalog/images/14.jpg",
    },
    {
      productName: "Вне суеты",
      category: "Люди",
      price: "39 900",
      image: "..//catalog/images/15.jpg",
    },
    {
      productName: "Поцелуй Посейдона",
      category: "Море",
      price: "4 750",
      image: "..//catalog/images/16.jpg",
    },
    {
      productName: "Единение",
      category: "Лес",
      price: "18 700",
      image: "..//catalog/images/17.jpg",
    },
    {
      productName: "Летний день",
      category: "Лес",
      price: "12 400",
      image: "..//catalog/images/18.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide",);
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container", "image");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.classList.add("imag")
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = i.price + " Р";
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "Все") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        //totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                //currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function    
            
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
  filterProduct("Все");
}




