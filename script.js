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
    get Cal() {
      let exstrasCalTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
      return (this.calories + exstrasCalTotal) * this.amount;
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
    get Cal() {
      let exstrasCalTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
      return (this.calories + exstrasCalTotal) * this.amount;
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
    get Cal() {
      let exstrasCalTotal = 0;
      for (let key in this.extras) {
        if (this.extras[key].checked) {
          exstrasCalTotal += this.extras[key].calories;
        }
      }
      return (this.calories + exstrasCalTotal) * this.amount;
    },
  },
};
function parentPrice(parent, product) {
  const mainParentPrice = parent.querySelector(".main__product-price span"),
    mainParentNum = parent.querySelector(".main__product-num"),
    mainParentKcall = parent.querySelector(".main__product-kcall span");

  mainParentNum.innerHTML = product.amount;
  mainParentPrice.innerHTML = product.Summ;
  mainParentKcall.innerHTML = product.Cal;
}

function addProduct() {
  const productsArr = [];
  const receiptWindowOut = document.querySelector(".receipt__window-out"),
  receiptCardTitle = document.querySelector(".receipt__card--title span");
  let TotalAmountToPay = 0 
  for (const key in products) {
    if (products[key].amount > 0) {
      productsArr.push(products[key]);
      TotalAmountToPay+= products[key].Summ
    }
  }
  receiptCardTitle.innerHTML = TotalAmountToPay
  receiptWindowOut.innerHTML = "";
  productsArr.forEach((product) => {
    receiptWindowOut.innerHTML += receiptList(product);
  });

  mainParents.forEach((parent) => {
    const id = parent.getAttribute("id");
    parentPrice(parent, products[id]);
  });

  
}

function receiptList(product) {
  const { id, img, name, amount, Summ } = product;
  return `
   <div class="receipt__card">
        <img src="${img}" class="receipt__card--img" />
        <div class="receipt__card-info">
          <h3 class="receipt__card--title">${name}</h3>
          <p class="receipt__card--price">Total: <span>${Summ}</span> so'm</p>
        </div>
        <div class="receipt__card-number">
          <a class="receipt__card-btn minus" onclick="delAmount(${id})">-</a>
          <output class="receipt__card-num">${amount}</output>
          <a class="receipt__card-btn plus" onclick="addAmount(${id})">+</a>
        </div>
   </div>`;
}

function addAmount(id) {
  for (const key in products) {
    if (products[key].id === id) {
      products[key].amount++;
    }
  }
  addProduct();
}

function delAmount(id) {
  for (const key in products) {
    if (products[key].id === id && products[key].amount > 0) {
      products[key].amount--;
    }
  }
  addProduct();
}

const mainParents = document.querySelectorAll(".main__product");

mainParents.forEach((parent) => {
  const parentId = parent.getAttribute("id");
  const product = products[parentId];

  const btns = parent.querySelectorAll(".main__product-btn");
  const checkboxes = parent.querySelectorAll(".main__product-checkbox");

  btns.forEach((btn) => {
    const symbol = btn.getAttribute("data-symbol");

    btn.addEventListener("click", () => {
      if (symbol === "+") product.amount++;
      if (symbol === "-" && product.amount > 0) product.amount--;

      parentPrice(parent, product);
      addProduct();
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const key = checkbox.getAttribute("data-extra");
      product.extras[key].checked = checkbox.checked;

      parentPrice(parent, product);
      addProduct();
    });
  });
});

const receipt = document.querySelector(".receipt"),
  DeliveryBtn = document.querySelector(".button"),
  receiptPayBtn = document.querySelector(".receipt__window-btn");

DeliveryBtn.onclick = () => receipt.classList.add("active");
receiptPayBtn.onclick = () => receipt.classList.remove("active");

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
