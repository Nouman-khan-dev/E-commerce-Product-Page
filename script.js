const cartBtn = document.querySelector(".cart-icon");
const cartBox = document.querySelector(".cart-box");
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImg = document.querySelector(".main-img");
const overlayImg = document.querySelector(".overlay_main-img");
const overlayThumbs = document.querySelectorAll(".overlay_thumbnail");
const addBtn = document.querySelector('.addBtn');
const itemsSection = document.querySelector(".items-section");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close");
let amountData = 0;
const imagesData = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
]

cartBtn.addEventListener("click", () => {
    cartBox.classList.toggle("hidden")
})
// -------------for-main-image------------
mainImg.addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("unvisible")
})
Array.from(thumbnails).forEach((e, i) => {
    e.addEventListener("click", () => {
        let thumbActive = document.querySelector(".thumbnails-container  .active");
        if (i == 0) {
            thumbActive.classList.remove("active")
            mainImg.src = imagesData[0]
            overlayImg.src = imagesData[0]
            e.classList.add("active")
        }
        if (i == 1) {
            thumbActive.classList.remove("active")
            mainImg.src = imagesData[1]
            overlayImg.src = imagesData[1]
            e.classList.add("active")
        }
        if (i == 2) {
            thumbActive.classList.remove("active")
            mainImg.src = imagesData[2]
            overlayImg.src = imagesData[2]
            e.classList.add("active")
        }
        if (i == 3) {
            thumbActive.classList.remove("active")
            mainImg.src = imagesData[3]
            overlayImg.src = imagesData[3]
            e.classList.add("active")
        }
    })
})

// ------------for-overlay-image-------------

Array.from(overlayThumbs).forEach((e, i) => {
    e.addEventListener("click", () => {
        // document.querySelectorAll(".thumbnails-container")
        // .classList.remove("active");
        let activeThumbs = document.querySelector(".overlay_thumbnails-cont .active");
        if (i == 0) {
            activeThumbs.classList.remove("active");
            mainImg.src = imagesData[0]
            overlayImg.src = imagesData[0]
            e.classList.add("active")
        }
        if (i == 1) {
            activeThumbs.classList.remove("active");
            mainImg.src = imagesData[1]
            overlayImg.src = imagesData[1]
            e.classList.add("active")
        }
        if (i == 2) {
            activeThumbs.classList.remove("active");
            mainImg.src = imagesData[2]
            overlayImg.src = imagesData[2]
            e.classList.add("active")
        }
        if (i == 3) {
            activeThumbs.classList.remove("active");
            mainImg.src = imagesData[3]
            overlayImg.src = imagesData[3]
            e.classList.add("active")
        }
    })
});
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("unvisible")
})
// --------------plus-and-minus-------
plusBtn.addEventListener("click",()=>{
    amountData++;
    amount.innerHTML = amountData
});
minusBtn.addEventListener("click",()=>{
    if(amountData > 0){
        amountData--;
        amount.innerHTML = amountData;
    }
    else{amountData = amountData}
})
// ----------add-to-cart-------
addBtn.addEventListener('click', () => {
    let total = amountData * 125;
    if(amountData > 0){
    itemsSection.innerHTML = `
    <div class="item">
        <img src="images/image-product-1-thumbnail.jpg" class="cart-thumb" alt="">
        <div class="p-info">
            <p class="name">Fall Limited Edition Sneakers</p>
            <p class="price">$125.00 X</p>
            <span class="devide">${amountData}</span>
            <span class="total">$${total}</span>
        </div>
        <img src="images/icon-delete.svg" class="delete" alt="">
    </div>
    <button class="checkout-btn">Checkout</button>
    `
    itemsSection.style.justifyContent = "space-between"
    // --------delete-----------
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click",()=>{
        amountData =  0;
        amount.innerHTML=amountData;
        itemsSection.innerHTML = `<p class="">Your cart is empty</p>`;
        itemsSection.style.justifyContent = "center";
        document.querySelector('.indicater').classList.remove("indecator");
    document.querySelector('.indicater').innerHTML = "";
    })
    document.querySelector('.indicater').classList.add("indecator");
    document.querySelector('.indicater').innerHTML = amountData;
}
});
// ------------------for-hamburger--and-close-icon---------
hamburger.addEventListener("click",()=>{
    document.querySelector(".nav-links").style.left="0%";
    document.querySelector(".overlayForMenu").classList.remove("hidden");
    document.querySelector(".overlayForMenu").style.left="0%";
})
close.addEventListener("click",()=>{
    document.querySelector(".nav-links").style.left="-100%";
    document.querySelector(".overlayForMenu").classList.add("hidden")
    document.querySelector(".overlayForMenu").style.left="-100%";
})

// -----responsive--next--and--prev-btns -----
let curimage = 0;
document.querySelector(".next").addEventListener("click",()=>{
    if(curimage < imagesData.length - 1){
        curimage++;
    }else{curimage = 0;}
    mainImg.src = imagesData[curimage];
});
document.querySelector(".prev").addEventListener("click",()=>{
    if(curimage > 0){
        curimage--;
    }else{curimage = imagesData.length - 1}
    mainImg.src = imagesData[curimage];
});