
const signUpForm = document.querySelector('#signup-form');
const name = document.querySelector('#name');
const em = document.querySelector('#email');
const pwd = document.querySelector('#pass');
const msg = document.querySelector('#message');
signUpForm.addEventListener('submit', function (event) {
  // prevent the page from reloading;
  event.preventDefault();
  const signPayload = {
    name: name.value,
    email: em.value,
    password: pwd.value,
  };
  const apiURL = 'https://crm-ai.onrender.com/api/v1/users/signup';
  const headers = {
    method: 'post',
    body: JSON.stringify(signPayload),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log(signPayload);
  fetch(apiURL, headers)
    .then(function (res) {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
    .then(function (json) {
      console.log(json);
      //   localStorage.setItem('user', JSON.stringify(json.user));
      window.location = 'index.html';
    })
    .catch(function (error) {
      console.log(error);
    });
});



