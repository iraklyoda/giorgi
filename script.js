const before = document.querySelector('#one')
const after = document.querySelector('#two');

before.addEventListener('click', () => {
  before.classList.add('none');
  after.classList.remove('none');
});

after.addEventListener('click', () => {
  after.classList.add('none');
  before.classList.remove('none');
});