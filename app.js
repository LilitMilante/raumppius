// slider

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
const container = document.querySelector('.main__all-projects');
const track = document.querySelector('.all-projects__slider');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider__project')
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
    item.getElementsByClassName.minWidth = `${itemWidth}px`
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;



    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;

};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

};

checkBtns();



// modal

const btnGetConsult = document.getElementById('btn-get-consult');
const modal = document.getElementById('modal');

btnGetConsult.addEventListener('click',() => {
    modal.style.display = 'grid'
});

modal.addEventListener('click',() => {
    modal.style.display = 'none'
});

