// jshint esversion: 6

const customer_btn = document.querySelector('#customer');
const f_vendor_btn = document.querySelector('#f-vendor');
const r_vendor_btn = document.querySelector('#r-vendor');


customer_btn.addEventListener("click",() => {
    document.getElementById('customer-form').style.visibility ="visible";
});
f_vendor_btn.addEventListener("click",() => {
    document.getElementById('f-vendor-form').style.visibility ="visible";
});
r_vendor_btn.addEventListener("click",() => {
    document.getElementById('r-vendor-form').style.visibility ="visible";
});


const services = [].slice.call(document.querySelectorAll(".service"));
console.log(services);
services.forEach(element => {
    element.addEventListener('click', function(){
        console.log( element.classList);
        element.classList.toggle('selected')
    })
});


const close_1 = document.querySelector('.close-btn-1');
const close_2 = document.querySelector('.close-btn-2');
const close_3 = document.querySelector('.close-btn-3');

close_1.addEventListener("click", function(){
    document.getElementById('customer-form').style.visibility ="hidden";
});
close_2.addEventListener("click", function(){
    document.getElementById('f-vendor-form').style.visibility ="hidden";
});
close_3.addEventListener("click", function(){
    document.getElementById('r-vendor-form').style.visibility ="hidden";
});




const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    // progressCheck[current -1].classList.add("active");
    current += 1;

    setTimeout(function () {
        alert("Input has been taken");
        document.getElementById('customer-form').style.visibility ="hidden";
        
    }, 800);
});


const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 1000;
let current = 3;

close_1.addEventListener("click", function(){
    document.getElementById('customer-form').style.visibility ="hidden";
});
// close_2.addEventListener("click", function(){
//     document.getElementById('electrical-installation').style.visibility ="hidden";
// });
// close_3.addEventListener("click", function(){
//     document.getElementById('plumbing-and-piping').style.visibility ="hidden";
// });



const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");


const slidePage_i = document.querySelector(".slidepage_i");
const firtNextBtn_i = document.querySelector(".nextBtn_i");
const prevBtnSec_i = document.querySelector(".prev-1_i");
const nextBtnSec_i = document.querySelector(".next-1_i");

const submitBtn_i = document.querySelector(".submit_i");
let current_i = 7;

const slidePage_ii = document.querySelector(".slidepage_ii");
const firtNextBtn_ii = document.querySelector(".nextBtn_ii");
const prevBtnSec_ii = document.querySelector(".prev-1_ii");
const nextBtnSec_ii = document.querySelector(".next-1_ii");
const prevBtnThird_ii = document.querySelector(".prev-2_ii");
const nextBtnThird_ii = document.querySelector(".next-2_ii");
const prevBtnFourth_ii = document.querySelector(".prev-3_ii");
const nextBtnFourth_ii = document.querySelector(".next-3_ii");
const prevBtnFifth_ii = document.querySelector(".prev-4_ii");
const nextBtnFifth_ii = document.querySelector(".next-4_ii");
const prevBtnSixth_ii = document.querySelector(".prev-5_ii");
const submitBtn_ii = document.querySelector(".submit_ii");
let current_ii = 10;



firtNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    current += 1;
});

prevBtnSec.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");

    // progressCheck[current -2].classList.remove("active");
    current -= 1;
});
nextBtnSec_i.addEventListener("click", function () {
    slidePage_i.style.marginLeft = "-50%";
    bullet[current_i - 1].classList.add("active");

    // progressCheck[current_i -1].classList.add("active");
    current_i += 1;
});




submitBtn_i.addEventListener("click", function () {
    bullet[current_i - 1].classList.add("active");
    // progressCheck[current_i -1].classList.add("active");
    current_i += 1;

    setTimeout(function () {
        alert("Input has been taken");
        document.getElementById('f-vendor-form').style.visibility ="hidden";
    }, 800);
});

firtNextBtn_i.addEventListener("click", function () {
    slidePage_i.style.marginLeft = "-25%";
    bullet[current_i - 1].classList.add("active");
    current_i += 1;
});

prevBtnSec_i.addEventListener("click", function () {
    slidePage_i.style.marginLeft = "0%";
    bullet[current_i - 2].classList.remove("active");

    // progressCheck[current_i -2].classList.remove("active");
    current_i -= 1;
});











submitBtn_ii.addEventListener("click", function () {
    bullet[current_ii - 1].classList.add("active");
    // progressCheck[current_ii -1].classList.add("active");
    current_ii += 1;

    setTimeout(function () {
        alert("Input has been taken");
        document.getElementById('r-vendor-form').style.visibility ="hidden";
    }, 800);
});

firtNextBtn_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-25%";
    bullet[current_ii - 1].classList.add("active");
    current_ii += 1;
});

prevBtnSec_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "0%";
    bullet[current_ii - 2].classList.remove("active");

    // progressCheck[current_ii -2].classList.remove("active");
    current_ii -= 1;
});

nextBtnSec_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-50%";
    bullet[current_ii - 1].classList.add("active");

    // progressCheck[current_ii -1].classList.add("active");
    current_ii += 1;
});

prevBtnThird_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-25%";
    bullet[current_ii - 2].classList.remove("active");

    // progressCheck[current_ii -2].classList.remove("active");
    current_ii -= 1;
});

nextBtnThird_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-75%";
    bullet[current_ii - 1].classList.add("active");

    // progressCheck[current_ii -1].classList.add("active");
    current_ii += 1;
});


prevBtnFourth_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-50%";
    bullet[current_ii - 2].classList.remove("active");

    // progressCheck[current_ii -2].classList.remove("active");
    current_ii -= 1;
});


nextBtnFourth_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-100%";
    bullet[current_ii - 1].classList.add("active");

    // progressCheck[current_ii -1].classList.add("active");
    current_ii += 1;
});

prevBtnFifth_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-75%";
    bullet[current_ii - 2].classList.remove("active");

    // progressCheck[current_ii -2].classList.remove("active");
    current_ii -= 1;
});


nextBtnFifth_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-125%";
    bullet[current_ii - 1].classList.add("active");

    // progressCheck[current_ii -1].classList.add("active");
    current_ii += 1;
});

prevBtnSixth_ii.addEventListener("click", function () {
    slidePage_ii.style.marginLeft = "-100%";
    bullet[current_ii - 2].classList.remove("active");

    // progressCheck[current_ii -2].classList.remove("active");
    current_ii -= 1;
});