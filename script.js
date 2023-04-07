const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  if(body.classList.contains('darkmode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
  else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
})