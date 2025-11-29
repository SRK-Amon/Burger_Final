// const mainParents = document.querySelectorAll(".main__product");

// mainParents.forEach((parent) => {
//   const parentId = parent.getAttribute("id"),
//     mainParentBtns = parent.querySelectorAll(".main__product-btn"),
//     mainParentCheckboxes = parent.querySelectorAll(".main__product-checkbox");

//   const product = products[parentId];
//   mainParentBtns.forEach((btn) => {
//     const btnSymbol = btn.getAttribute("data-symbol");

//     btn.addEventListener("click", () => {
//       if (btnSymbol === "+") {
//         product.amount++;
//       } else if (btnSymbol === "-" && product.amount > 0) {
//         product.amount--;
//       }

//       addProduct();
//       parentPrice();
//     });
//   });
//   mainParentCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", () => {
//       const checkboxData = checkbox.getAttribute("data-extra");

//       product.extras[checkboxData].checked = checkbox.checked;

//       parentPrice();
//       addProduct();
//     });
//   });
//   function addProduct() {
//     const productsArr = [];
//     for (const key in products) {
//       if (products[key].amount) {
//         productsArr.push(products[key]);
//       }
//     }
//     parentPrice();
//     receiptWindowOut.innerHTML = "";
//     for (let i = 0; i < productsArr.length; i++) {
//       receiptWindowOut.innerHTML += receiptList(productsArr[i]);
//     }
//   }
//   function parentPrice() {
//     const mainParentPrice = parent.querySelector(".main__product-price span"),
//       mainParentNum = parent.querySelector(".main__product-num"),
//       mainParentKcall = parent.querySelector(".main__product-kcall span");
//     mainParentNum.innerHTML = product.amount;
//     mainParentPrice.innerHTML = product.Summ;
//     mainParentKcall.innerHTML = product.Cal;
//   }

//   const receiptWindowOut = document.querySelector(".receipt__window-out"),
//     DeliveryBtn = document.querySelector(".button"),
//     receipt = document.querySelector(".receipt"),
//     receiptPayBtn = document.querySelector(".receipt__window-btn");

//   DeliveryBtn.onclick = () => {
//     receipt.classList.add("active");
//   };
//   receiptPayBtn.onclick = () => {
//     receipt.classList.remove("active");
//   };
//   function receiptList(product) {
//     const {id , img, name, amount, Summ } = product;
//     return `
//    <div class="receipt__card">
//             <img
//               src="${img}"
//               alt="Product__img"
//               class="receipt__card--img"
//             />
//             <div class="receipt__card-info">
//               <h3 class="receipt__card--title">${name}</h3>
//               <p class="receipt__card--price">Total: <span>${Summ}</span> so'm</p>
//             </div>
//             <div class="receipt__card-number">
//               <a class="receipt__card-btn fa-reg minus" data-symbol="-" onclick="delAmount(${id})"></a>
//               <output class="receipt__card-num">${amount}</output>
//               <a class="receipt__card-btn fa-reg plus" data-symbol="+" onclick="addAmount(${id});"></a>
//             </div>
//           </div>`;
//   }
// });
// function addAmount(id) {
//   for (const key in products) {
//     const pk = products[key];
//     if (pk.id == id) {
//       pk.amount++;
//     }
//   }
//   addProduct()
// }


// function delAmount(id) {
//   for (const key in products) {
//     const pk = products[key];
//     if (pk.id == id) {
//       pk.amount--;
//     }
//   }
//    addProduct()
// }











// const productBtns = document.querySelectorAll(".main__product-btn");
// const productArr = []
// productBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const btnData = btn.getAttribute("data-symbol");
//     const parent = btn.closest(".main__product");
//     const parentId = parent.getAttribute("id");
//     const parentNum = parent.querySelector(".main__product-num");

//     if (btnData === "-" && products[parentId].amount > 0) {
//       products[parentId].amount--;
//     } else if (btnData === "+") {
//       products[parentId].amount++;
//     }

//     parentNum.textContent = products[parentId].amount;

//     if (products[parentId].amount > 0) {
//       productSumm(parent, parentId);
//     } else {
//       const priceElement = parent.querySelector(".main__product-price span");
//       priceElement.innerHTML = 0;
//     }
//   });
// });

// const allCheckboxes = document.querySelectorAll(".main__product-checkbox");
// allCheckboxes.forEach((checkbox) => {
//   const parent = checkbox.closest(".main__product");
//   const parentId = parent.getAttribute("id");
//   const checkboxData = checkbox.getAttribute("data-extra");

//   checkbox.addEventListener("change", () => {
//     products[parentId].extras[checkboxData].checked = checkbox.checked;
//     productSumm(parent, parentId);
//   });
// });

// function productSumm(parent, parentId) {
//   const priceElement = parent.querySelector(".main__product-price span"),
//     CaloriesElement = parent.querySelector(".main__product-kcall span");
//   priceElement.innerHTML = products[parentId].Summ;
//   CaloriesElement.innerHTML = products[parentId].Cal;
// }