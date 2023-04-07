const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');

function store(value) {
  localStorage.setItem('darkmode', value);
}

function load() {
  const darkmode = localStorage.getItem('darkmode');
}

if(!darkmode) {
  store('false');
  icon.classList.add('fa-sun');
}


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
  setTimeout ( () => {
    icon.classList.remove('animated');
  },500)
})