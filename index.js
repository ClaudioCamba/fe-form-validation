const cardForm = document.getElementById('business-card');

function handleForm(event) {
  
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const company = document.getElementById('company');
  const jobTitle = document.getElementById('job-title');
  const email = document.getElementById('email');
  // const emailRegex = new RegExp(^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.);

  // if(/^[a-zA-Z]+$/.test(firstName)){
    if (/[^a-zA-Z]+$/.test(firstName.value)){
      event.preventDefault();
      firstName.nextElementSibling.innerText = 'Incorrect first name format';
    } 
    if (/[^a-zA-Z]+$/.test(lastName.value)){
      event.preventDefault();
      lastName.nextElementSibling.innerText = 'Incorrect last name format';
    } 
    if (/[^a-zA-Z0-9]+$/.test(company.value)){
      event.preventDefault();
      company.nextElementSibling.innerText = 'Incorrect Company name format';
    } 
    if (/[^a-zA-Z0-9]+$/.test(jobTitle.value)){
      event.preventDefault();
      jobTitle.nextElementSibling.innerText = 'Incorrect job title format';
    } 
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.))/.test(email.value)){
      event.preventDefault();
      email.nextElementSibling.innerText = 'Incorrect email format';
    }
    // console.log(/^[a-zA-Z]+$/.test(firstName))
    // console.dir(firstName)
    // event.preventDefault();
  // }
  // console.log(firstName.value); //asd
}

cardForm.addEventListener('submit', handleForm);
