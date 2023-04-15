let count = 0;

const countElement = document.querySelector('#count');
const before = document.querySelector('#one')
const after = document.querySelector('#two');

window.dataLayer.push({
  'character': 'Giorgi',
})

before.addEventListener('click', () => {
  count++;
  before.classList.add('none');
  after.classList.remove('none');
  countElement.textContent = count;
  check(count);
});

after.addEventListener('click', () => {
  count++;
  after.classList.add('none');
  before.classList.remove('none');
  countElement.textContent = count;
  check(count);
});

function check(count) {
  if (count >= 100) {
    countElement.textContent = 'კაი გეყოს';
    before.classList.add('none');
    after.classList.remove('none');
  }
}

