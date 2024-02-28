const rigthClick = document.querySelector('.rigth-click');
const logo = document.querySelector('.logo');

logo.onauxclick = (event) => {
  event.preventDefault()
  rigthClick.style.display = 'block'
};
document.addEventListener("contextmenu", (e) => { e.preventDefault() });

document.addEventListener('click', function () {
  rigthClick.style.display = 'none'
})