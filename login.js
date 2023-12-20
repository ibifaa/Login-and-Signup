const em = document.querySelector('#email');
const pwd = document.querySelector('#pass');
const loginForm = document.querySelector('.form');
loginForm.addEventListener('submit', function (event) {
  // prevent the page from reloading;
  event.preventDefault();
  const logPayload = {
    email: em.value,
    password: pwd.value,
  };
  const apiURL = 'https://crm-ai.onrender.com/api/v1/users/login';
  const headers = {
    method: 'post',
    body: JSON.stringify(logPayload),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(apiURL, headers)
    .then(function (res) {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
    .then(function (json) {
      console.log(json);
      const user = {
        id: json.data.id,
        name: json.data.name,
        token: json.token,
        email: json.data.email,
      };
      localStorage.setItem('user', JSON.stringify(user));
        window.location = 'output.html';
    })
    .catch(function (error) {
      console.log(error);
    });
});