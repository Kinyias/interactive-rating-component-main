const rating_number = document.querySelectorAll('.card-rating-number');
const btn_submit = document.querySelector('.btn-submit');
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const number_star = document.querySelector('.number-star');
let stars_core = 3 //Default value
//Handle click rating number add class active
function handleRating(){
    rating_number.forEach(e => e.classList.remove('active'))
    this.classList.add('active');
    stars_core = this.textContent;
}
rating_number.forEach( (e) =>{
    e.addEventListener('click', handleRating);
})
//Handle Submit
function handleSubmit(){
    card_1.classList.add('hidden');
    card_2.classList.remove('hidden');
    number_star.textContent = stars_core;
}
btn_submit.addEventListener('click', handleSubmit)
