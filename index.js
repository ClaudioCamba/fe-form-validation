const cardForm = document.getElementById('business-card');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const company = document.getElementById('company');
const jobTitle = document.getElementById('job-title');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');



firstName.addEventListener('input', (event)=>{
  if (/[^a-zA-Z]+$/.test(firstName.value)) {
    event.preventDefault();
    firstName.nextElementSibling.innerText = 'Incorrect first name format';
    firstName.nextElementSibling.classList.add('invalid').remove('valid');
  } else {
    firstName.nextElementSibling.innerText = 'Matches format';
    firstName.nextElementSibling.classList.add('valid').remove('invalid');
  }
});

lastName.addEventListener('blur', (event)=>{
  if (/[^a-zA-Z]+$/.test(lastName.value)) {
    event.preventDefault();
    lastName.nextElementSibling.innerText = 'Incorrect last name format';
  } else {
    lastName.nextElementSibling.innerText = '';
  }
});

jobTitle.addEventListener('blur', (event)=>{
  if (/[^a-zA-Z0-9]+$/.test(jobTitle.value)) {
    event.preventDefault();
    jobTitle.nextElementSibling.innerText = 'Incorrect job title format';
  } else {
    jobTitle.nextElementSibling.innerText = '';
  }
});

function handleForm(event) {


  // if (/[^a-zA-Z0-9]+$/.test(company.value)) {
  //   event.preventDefault();
  //   company.nextElementSibling.innerText = 'Incorrect Company name format';
  // }
 
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
    event.preventDefault();
    email.nextElementSibling.innerText = 'Incorrect email format';
  }

  if (
    !/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
      phone.value
    )
  ) {
    event.preventDefault();
    phone.nextElementSibling.innerText = 'Incorrect phone number format';
  }

}

cardForm.addEventListener('submit', handleForm);
