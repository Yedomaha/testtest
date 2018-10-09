var counterBlock = document.querySelector('.top-cart-info__item'),
    redItems = counterBlock.querySelectorAll('.red-info')[0],
    redPrice = counterBlock.querySelectorAll('.red-info')[1],
    counterOfItems = 0,
    counterOfPrice = 0;

var parentElementColection = document.getElementsByClassName('product-box__item');

for(i = 0; i < parentElementColection.length; i++){
    parentElementColection[i].id = "productBox"+i;
    parentElementColection[i].querySelector(".product-box__btn").addEventListener("click", priseAndQuantityCalculate);
}

function priseAndQuantityCalculate(){
    var parent = this.parentElement;
    var price = parseInt((parent.querySelector("p")).innerText);
    var inputVal = parseInt(parent.querySelector("input").value);
    var commonSum;
    if(inputVal > 0) {
        commonSum = inputVal * price;
        counterOfItems = counterOfItems + inputVal;
        counterOfPrice = counterOfPrice + commonSum;
        redItems.innerHTML = counterOfItems;
        redPrice.innerHTML = counterOfPrice;
    }
}

/*Фильтрация*/

var categorySelectBox = document.querySelector('.select-box'),
    categorySelector = categorySelectBox.querySelector('.select-control'),
    priceSelectBox = document.querySelector('.price-select-box'),
    priceSelector = priceSelectBox.querySelector('.select-control'),
    breakfast = document.querySelectorAll('.breakfast'),
    firstMeal = document.querySelectorAll('.first-meal'),
    garnish = document.querySelectorAll('.garnish');

categorySelector.addEventListener("change", categoryFilter);
priceSelector.addEventListener("change", priseFilter);

function categoryFilter() {
    var categorySelectorValue = categorySelector.value
    if(categorySelectorValue == 0){
        for(i = 0; i < parentElementColection.length; i++) {
            parentElementColection[i].classList.remove('disp-none');
        }
    }
    if(categorySelectorValue == 1){
        for(i = 0; i < parentElementColection.length; i++) {
            parentElementColection[i].classList.add('disp-none');
        }
        for(i = 0; i < breakfast.length; i++) {
            breakfast[i].classList.remove('disp-none');
        }
    }
    if(categorySelectorValue == 2){
        for(i = 0; i < parentElementColection.length; i++) {
            parentElementColection[i].classList.add('disp-none');
        }
        for(i = 0; i < firstMeal.length; i++) {
            firstMeal[i].classList.remove('disp-none');
        }
    }
    if(categorySelectorValue == 3){
        for(i = 0; i < parentElementColection.length; i++) {
            parentElementColection[i].classList.add('disp-none');
        }
        for(i = 0; i < garnish.length; i++) {
            garnish[i].classList.remove('disp-none');
        }
    }
}

function priseFilter() {
    var priceSelectorValue = priceSelector.value;
    var priceForFiltration;
    if(priceSelectorValue == 0){
        for (i = 0; i < parentElementColection.length; i++) {
            parentElementColection[i].classList.remove('disp-none-for-price');
        }
    }
    if(priceSelectorValue == 30){
        for(i = 0; i < parentElementColection.length; i++){
            parentElementColection[i].classList.remove('disp-none-for-price');
            priceForFiltration = parseInt(parentElementColection[i].querySelector(".product-box__meta").querySelector('p').innerText);
            if(priceForFiltration >= 30){
                parentElementColection[i].classList.add('disp-none-for-price');
            }
        }
    }
    if(priceSelectorValue == 50){
        for(i = 0; i < parentElementColection.length; i++){
            parentElementColection[i].classList.remove('disp-none-for-price');
            priceForFiltration = parseInt(parentElementColection[i].querySelector(".product-box__meta").querySelector('p').innerText);
            if(priceForFiltration >= 50){
                parentElementColection[i].classList.add('disp-none-for-price');
            }
        }
    }
    if(priceSelectorValue == 100){
        for(i = 0; i < parentElementColection.length; i++){
            parentElementColection[i].classList.remove('disp-none-for-price');
            priceForFiltration = parseInt(parentElementColection[i].querySelector(".product-box__meta").querySelector('p').innerText);
            if(priceForFiltration >= 100){
                parentElementColection[i].classList.add('disp-none-for-price');
            }
        }
    }
    if(priceSelectorValue == 150){
        for(i = 0; i < parentElementColection.length; i++){
            parentElementColection[i].classList.remove('disp-none-for-price');
            priceForFiltration = parseInt(parentElementColection[i].querySelector(".product-box__meta").querySelector('p').innerText);
            if(priceForFiltration >= 150){
                parentElementColection[i].classList.add('disp-none-for-price');
            }
        }
    }
}

/*Модальное окно*/

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.querySelector('.close');

btn.onclick = function(){
    modal.style.display = "block";
};
span.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function(){
    if(event.target == modal){
        modal.style.display = "none";
    }
};

/*Форма*/

var formBtn = document.getElementById('form__btn'),
    form = formBtn.parentElement,
    nameInput = form.querySelector(".form__name"),
    emailInput = form.querySelector(".form__e-mail"),
    formError = form.querySelector(".form__error"),
    thankBlock = document.getElementById('thank'),
    pattern = /^[\s]+$/ ;

formBtn.onclick = function () {
    var nameInputVal = nameInput.value;
    var emailInputVal = emailInput.value;
    if (nameInputVal == "" || emailInputVal == "" || pattern.test(nameInputVal) || pattern.test(emailInputVal)) {
        formError.style.display = "block";
    } else {
        counterOfItems = 0;
        counterOfPrice = 0;
        redItems.innerHTML = 'XXX';
        redPrice.innerHTML = 'XXX';
        modal.style.display = "none";
        thankBlock.style.display = "block";
        setTimeout(function(){
            thankBlock.style.display = "none";
        },1000)
    }
};


