const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-button');
const modalElement = document.querySelector('.modal');
let profileName = document.querySelector ('.profile__name');
let profileDescription = document.querySelector ('.profile__description');
let formElement = document.querySelector('.form');
let formName = document.querySelector('.form__name');
let formDescription = document.querySelector('.form__description');

function openedModal() {
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  modalElement.classList.add('modal_opened');
}

function closedModal() {
  modalElement.classList.remove('modal_opened');
}

editButton.addEventListener('click', openedModal);
closeButton.addEventListener('click', closedModal);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closedModal();
}

formElement.addEventListener('submit', formSubmitHandler);
