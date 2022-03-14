const modalElement = document.querySelector('div#modal');

const openButton = document.querySelector('button.open-modal');

openButton.addEventListener('click', () => {
  const url = 'form.html';

  fetch(url)
  .then(response => response.text())
  .then(data => {
    document.querySelector('div#modal-content').innerHTML = data;
    modalElement.style.display = 'flex';
    setTimeout(() => { modalElement.classList.add('visible') }, 5);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

});

const closeButton = document.querySelector('div#close-modal');

closeButton.addEventListener('click', () => {
  console.log('hoi');
  modalElement.classList.remove('visible');
  setTimeout(() => { modalElement.style.display = 'none'; }, 1200);
});

// WERKT NIET
const submitButton = document.querySelector('button#submit');

submitButton.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((inputEl) => {
    console.log(inputEl.value);
  });
});
