let nav = document.querySelector('.nav');
let menuBtn = document.getElementById('menuBtn');
let closeBtn = document.getElementById('closeBtn');
let bg = document.querySelector('.background');

menuBtn.onclick = ()=> {
    nav.classList.add('active');
    bg.classList.add('bgactive');
}
closeBtn.onclick = ()=>{
    nav.classList.remove('active');
    bg.classList.remove('bgactive');
}

let navLink = document.querySelectorAll('.nav-link');
for(let i = 0; i< navLink.length; i++){
    navLink[i].onclick = function(){
        let j = 0;
        while(j < navLink.length){
            navLink[j++].className = 'nav-link';
        }
        navLink[i].className = 'nav-link active';
    }
}

let imageLink = document.querySelectorAll('.imageLink');
let pImage = document.querySelectorAll('.pImage');
let index = 0;

function changeImage(indicator){
    pImage.forEach((image) => {
        image.classList.remove('active');
    });

    imageLink.forEach((link) => {
        link.classList.remove('active');
    });

    imageLink[indicator].classList.add('active');
    pImage[indicator].classList.add('active');
}

imageLink.forEach((link, i) => {
    link.addEventListener('click', ()=>{
        changeImage(i);
        // index = i;
    });
});

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let currentSlide = 0;

prevBtn.onclick = ()=> {
    prevBtn.classList.add('active');
    nextBtn.classList.remove('active');

    if(currentSlide == 0){
        currentSlide = pImage.length-1;
    }
    else{
        currentSlide--;
    }
    changeSlide();
}
nextBtn.onclick = ()=> {
    nextBtn.classList.add('active');
    prevBtn.classList.remove('active');

    if(currentSlide  == pImage.length-1){
        currentSlide = 0;
    }
    else{
        currentSlide++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < pImage.length; i++){
        pImage[i].classList.remove('active');
        imageLink[i].classList.remove('active');
    }
    pImage[currentSlide].classList.add('active');
    imageLink[currentSlide].classList.add('active');

}

preview = document.getElementById('previewImage');
let previewBox = document.querySelector('.previewBox');
let prevCloseBtn = document.getElementById('prevCloseBtn');

pImage.forEach((image) => {
    image.onclick = function(){
        preview.classList.add('active');
        bg.classList.add('active');
        previewBox.classList.add('active');
    }
});
    

prevCloseBtn.onclick = function(){
    preview.classList.remove('active');
    bg.classList.remove('active');
    previewBox.classList.remove('active');
}


// // for previewbox
let prevImageLink = document.querySelectorAll('.prevImageLink');
let prevImage = document.querySelectorAll('.prevImage');
function changeSlideImage(indicator){
    prevImage.forEach((image) => {
        image.classList.remove('active');
    });

    prevImageLink.forEach((link) => {
        link.classList.remove('active');
    });

    prevImageLink[indicator].classList.add('active');
    prevImage[indicator].classList.add('active');
}

prevImageLink.forEach((link, i) => {
    link.addEventListener('click', ()=>{
        changeSlideImage(i);
    });
});

let prevboxBtn = document.getElementById('prevBox');
let nextboxBtn = document.getElementById('nextBox');

let slide = 0;
prevboxBtn.onclick = ()=> {
    prevBtn.classList.add('active');
    nextBtn.classList.remove('active');

    if(slide == 0){
        slide = prevImage.length-1;
    }
    else{
        slide--;
    }
    slideChange();
}
nextboxBtn.onclick = ()=> {
    nextBtn.classList.add('active');
    prevBtn.classList.remove('active');

    if(slide  == prevImage.length-1){
        slide = 0;
    }
    else{
        slide++;
    }
    slideChange();
}

function slideChange(){
    for(let i = 0; i < prevImage.length; i++){
        prevImage[i].classList.remove('active');
        prevImageLink[i].classList.remove('active');
    }
    prevImage[slide].classList.add('active');
    prevImageLink[slide].classList.add('active');

}

// for cart
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let itemCount = document.getElementById('itemCount');
let salePrice = document.getElementById('salePrice').textContent;
let itemBox = document.querySelector('.itemBox');
let emptyCart = document.querySelector('.emptyCart');
let totalItem = document.getElementById('totalI');
let totalP = document.getElementById('totalP');
let cartBtn = document.getElementById('cartBtn');
let cart = document.querySelector('.cart');
let buyBtn = document.getElementById('buyBtn');
let cBtn = document.getElementById('cBtn');
let deleteBtn = document.querySelector('.deleteBtn');
let badge = document.querySelector('.badge');

salePrice = Number(salePrice);
let total = 0;
let price = 0;
function totalPrice(){
    
    plus.onclick = function(){
        total += 1;
        itemCount.textContent = total;
        price = salePrice * total;
    }
    minus.onclick = function(){
        if(total <= 0){
            window.alert("You are at zerooooo!")
        }
        else{
            total -= 1;
            itemCount.textContent = total;
            price = salePrice * total;

        }
    }
}
totalPrice();

buyBtn.onclick = function(){
    if(total != 0){
        itemBox.classList.add('active');
        emptyCart.classList.add('active');
        cBtn.classList.add('active');
        badge.classList.add('active');
        badge.textContent = total;
        totalItem.textContent = total;
        totalP.textContent = price;
    }
    else{
        itemBox.classList.remove('active');
        emptyCart.classList.remove('active');
        cBtn.classList.remove('active');
        badge.classList.remove('active');
        badge.textContent = null;
        window.alert(`You haven't even added an item to the cart!`);
    }
}
cartBtn.onclick = function(){
    cart.classList.toggle('active');    
}

deleteBtn.onclick = function(){
    itemBox.classList.remove('active');
    emptyCart.classList.remove('active');
    cBtn.classList.remove('active');
    cart.classList.toggle('active');
    badge.classList.remove('active');
    itemCount.textContent = 0;
    badge.textContent = null;
    total = 0;
}

cBtn.onclick = function(){
    window.alert('Your order is completed!');
    itemBox.classList.remove('active');
    emptyCart.classList.remove('active');
    cBtn.classList.remove('active');
    cart.classList.toggle('active');
    badge.classList.remove('active');
    itemCount.textContent = 0;
    badge.textContent = null;
    total = 0;

}