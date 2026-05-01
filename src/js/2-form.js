const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// 1. Завантаження з localStorage при старті
populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

// 2. Збереження даних при вводі
function onFormInput(e) {
  const { name, value } = e.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 3. Сабміт форми
function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = { email: '', message: '' };
  form.reset();
}

// 4. Відновлення даних після перезавантаження
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (err) {
    console.log('Error parsing storage data', err);
  }
}
console.log(form);
