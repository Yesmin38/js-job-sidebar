let button = document.querySelector('nav span')
console.log(button);
let slider = document.querySelector('.slider')

button.addEventListener('click',sidebar)

function sidebar(){
    //alert('hle');
    slider.classList.toggle('active')

}