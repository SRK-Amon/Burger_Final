const products = {
  plainBurger: {
    id: 1,
    img: "images/product2.jpg",
    name: "GAMBURGER",
    price: 10000,
    amount: 0,
    calories: 600,
    extras: {
      doubleMayonnaise: {
        name: "Double Mayonnaise",
        price: 2000,
        calories: 100,
        checked: false,
      },
      lettuce: {
        name: "Lettuce Leaf",
        price: 1500,
        calories: 30,
        checked: false,
      },
      cheese: {
        name: "Cheese",
        price: 2500,
        calories: 120,
        checked: false,
      },
    },
    get Summ() {
      let extrasTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          extrasTotal += this.extras[key].price;
        }
      }
      return (this.price + extrasTotal) * this.amount;
    },
    get Cal(){
      let exstrasCalTotal = 0 ;
      for(let key in this.extras){
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
       return (this.calories + exstrasCalTotal) * this.amount
    },
  },
  freshBurger: {
    id: 2,
    img: "images/product1.jpg",
    name: "GAMBURGER FRESH",
    price: 20500,
    amount: 0,
    calories: 700,
    extras: {
      doubleMayonnaise: {
        name: "Double Mayonnaise",
        price: 2000,
        calories: 100,
        checked: false,
      },
      lettuce: {
        name: "Lettuce Leaf",
        price: 1500,
        calories: 30,
        checked: false,
      },
      cheese: {
        name: "Cheese",
        price: 2500,
        calories: 120,
        checked: false,
      },
    },
    get Summ() {
      let extrasTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          extrasTotal += this.extras[key].price;
        }
      }
      return (this.price + extrasTotal) * this.amount;
    },
    get Cal(){
      let exstrasCalTotal = 0 ;
      for(let key in this.extras){
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
       return (this.calories + exstrasCalTotal) * this.amount
    },
  },
  freshCombo: {
    id: 3,
    img: "images/product3.jpg",
    name: "FRESH COMBO",
    price: 31900,
    amount: 0,
    calories: 800,
    extras: {
      doubleMayonnaise: {
        name: "Double Mayonnaise",
        price: 2000,
        calories: 100,
        checked: false,
      },
      lettuce: {
        name: "Lettuce Leaf",
        price: 1500,
        calories: 30,
        checked: false,
      },
      cheese: {
        name: "Cheese",
        price: 2500,
        calories: 120,
        checked: false,
      },
    },
    get Summ() {
      let extrasTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          extrasTotal += this.extras[key].price;
        }
      }
      return (this.price + extrasTotal) * this.amount;
    },
    get Cal(){
      let exstrasCalTotal = 0 ;
      for(let key in this.extras){
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
      return (this.calories + exstrasCalTotal) * this.amount
    },
  },
};

const productBtns = document.querySelectorAll(".main__product-btn");

productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnData = btn.getAttribute("data-symbol");
    const parent = btn.closest(".main__product");
    const parentId = parent.getAttribute("id");
    const parentNum = parent.querySelector(".main__product-num");

    if (btnData === "-" && products[parentId].amount > 0) {
      products[parentId].amount--;
    } else if (btnData === "+") {
      products[parentId].amount++;
    }

    parentNum.textContent = products[parentId].amount;

    if (products[parentId].amount > 0) {
      productSumm(parent, parentId);
    } else { 
      const priceElement = parent.querySelector(".main__product-price span");
      priceElement.innerHTML = 0
    }
  });
});

const allCheckboxes = document.querySelectorAll(".main__product-checkbox");
allCheckboxes.forEach((checkbox) => {
  const parent = checkbox.closest(".main__product");
  const parentId = parent.getAttribute("id");
  const checkboxData = checkbox.getAttribute("data-extra");

  checkbox.addEventListener("change", () => {
    products[parentId].extras[checkboxData].checked = checkbox.checked;
    productSumm(parent, parentId);
  });
});

function productSumm(parent, parentId) {
  const priceElement = parent.querySelector(".main__product-price span"),
  CaloriesElement = parent.querySelector(".main__product-kcall span");
  priceElement.innerHTML = products[parentId].Summ;
  CaloriesElement.innerHTML = products[parentId].Cal;
}


const mainProductInfo = document.querySelectorAll(".main__product-info");
mainProductInfo.forEach((product) => {
  product.addEventListener("click", () => {
    const productImg = product.querySelector(".main__product-img");
    let ImgSrc = productImg.getAttribute("src");

    const view = document.querySelector(".view"),
      viewImg = view.querySelector("img"),
      viewClose = view.querySelector(".view__close");

    view.classList.add("active");
    viewImg.setAttribute("src", ImgSrc),
      viewClose.addEventListener("click", () => {
        view.classList.remove("active");
      });
  });
});

const timer = document.querySelector(".header__timer-extra");

function timerStart(timer) {
  let time = 0;
  const max = 100;
  function updateTimer() {
    let speed;
    timer.textContent = time;
    if (time <= 50) {
      speed = 100;
    } else {
      speed = 200;
    }
    if (time == max) return;
    setTimeout(() => {
      time++;
      updateTimer();
    }, speed);
  }
  updateTimer();
}
timerStart(timer);