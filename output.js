let details =  JSON.parse(localStorage.getItem('user'));

let userName = document.querySelector(".name");
let email = document.querySelector(".email");

let eventName = document.querySelector("#event");
let about = document.querySelector("#about")
let address = document.querySelector("#location")
let date = document.querySelector("#date")
let form = document.querySelector(".outputForm")

userName.textContent = details.name;
email.textContent = details.email;

form.addEventListener('submit', function (event) {
    // prevent the page from reloading;
    event.preventDefault();
    const outputPayload = {
      name: eventName.value,
      about: about.value,
      location: address.value,
      date: date.value,
      createdBy:details.id,
    };
    const apiURL = 'https://crm-ai.onrender.com/api/v1/events/'
    const headers = {
      method: 'post',
      body: JSON.stringify(outputPayload),
      headers: {
        'Content-Type': 'application/json',
        Authorization :`Bearer ${details.token}`
      },
    };
    console.log(outputPayload);
    fetch(apiURL, headers)
      .then(function (res) {
        if (res.ok) {return res.json()}
        else{
        return Promise.reject(res);
        }
      })
      // return Promise.reject(res);
    
      .then(function (json) {
        console.log(json);
        //   localStorage.setItem('user', JSON.stringify(json.user));
        // window.location = 'index.html';
      })
      .catch(function (error) {
        console.log(error);
     });
  });
  
  
  

