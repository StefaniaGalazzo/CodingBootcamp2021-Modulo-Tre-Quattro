/*Creare una pagina web che simuli un pò il comportamento di un ecommerce. 
Scegliete pure il vostro stile, ma aggiungete qualche immagine e qualche riga di testo, 
abbellite il design ma non perdeteci più di un'ora su questo aspetto.

*/

import { products } from "./products.js"; 

function createProduct(parent, imgUrl, productTitle, textPrice) {
    const product = document.createElement("div");
    product.className = "product";
  
    createImg(product, imgUrl, productTitle);
    createText(product, productTitle, textPrice);
    parent.appendChild(product);
  }
  
  function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;
  
    parent.appendChild(image);
  }
  
  function createText(parent, productTitle, textPrice) {
    const title = document.createElement("h4");
    title.textContent = productTitle;
  
    const price = document.createElement("strong");
    price.textContent = `${textPrice} €`;
  
    parent.append(title, price);
  }
  

  const wrapperProducts = document.querySelector(".wrapper__products");
  const wrapperProductsTwo = document.querySelector(".wrapper__prod");
  
  function renderProduct(parent) {
    products.map((product) => {
        createProduct(parent, product.image, product.title, product.price);
    });
  }




const alfabeticoBtn = document.querySelector(".ordinealfabetico");
const prezzoCrescenteBtn = document.querySelector(".ordinaperprezzo");


alfabeticoBtn.addEventListener('click', () => {
    products.sort((a,b) => (a.title > b.title) ? 1 : -1);

    while(wrapperProducts.firstChild) wrapperProducts.removeChild(wrapperProducts.lastChild);
    
    renderProduct(wrapperProducts);



//    const newProdList = a.sort((a,b)=> (a.title > b.title ? 1 : -1));

    // products.sort(function(a, b) {
    //     return a.title - b.title;
    // });
    // function renderSortProduct(parent) {
    //     const titleTwo = (products.sort());
    //     titleTwo.map((product) => {
    //         createProduct(parent, product.image, product.title, product.price);
    //     }
    //     )}
});


prezzoCrescenteBtn.addEventListener('click', () => {
  products.sort((a,b) => (a.price > b.price) ? 1 : -1);

  while(wrapperProducts.firstChild) wrapperProducts.removeChild(wrapperProducts.lastChild);
  renderProduct(wrapperProducts);
});
// console.log(renderSortProduct);

renderProduct(wrapperProducts);
renderProduct(wrapperProductsTwo);

