const cardForm = document.getElementById('business-card');

function handleForm(event) {
  const firstName = document.getElementById('first-name');

  console.log(firstName.value); //asd
}
cardForm.addEventListener('submit', handleForm);
