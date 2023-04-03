const inputElement = document.querySelector('.email');
const formEmailElement = document.querySelector('.form_gradient_border');

inputElement.addEventListener('focus', function() {
    formEmailElement.style.boxShadow = '0px 24px 48px rgba(65, 94, 237, 0.12), 0px 4px 8px rgba(3, 6, 26, 0.02), 0px 24px 48px rgba(3, 6, 26, 0.04)';
    formEmailElement.style.padding = '2px';
    formEmailElement.style.Radius = '18px';
    formEmailElement.style.backgroundImage = 'linear-gradient(45deg, #415EED 0%, #3651DA 100%)';
    formEmailElement.style.position = 'absolute';
    formEmailElement.add('blend');
    formEmailElement.setProperty('--blend-gradient', 'linear-gradient(135deg, #F7F8FC00 0%, #F7F8FC6B 15%, #F7F8FC17 35%, #F7F8FCE5 55%, rgba(247, 248, 252, 0) 80%, #F7F8FC00 100%, #F7F8FC00 0)');
    formEmailElement.setProperty('--blend-mode', 'soft-light');
});
inputElement.addEventListener('blur', function() {
    formEmailElement.style.boxShadow = '';
    formEmailElement.style.padding = '';
    formEmailElement.style.Radius = '';
    formEmailElement.style.backgroundImage = '';
    formEmailElement.style.backgroundColor = 'rgba(7, 24, 90, 0.08)';
    formEmailElement.style.position = '';

});
// disable mailchimp forwarding 
var submitInput = document.getElementById('mce-EMAIL');
var submitButton = document.getElementById('mc-embedded-subscribe');
var form = document.getElementById('mc-embedded-subscribe-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    submitButton.textContent = 'Thank you!'; 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          
        
        } else {
          
        
        }
      }
    };
    xhr.send(new FormData(form));
    submitInput.value = '';
  });


// button link to logolivery, drive, tw and in
document.getElementById('back_logolivery').addEventListener('click', function() {
  window.location.href = 'https://logolivery.com/';
});

document.getElementById('drive_button').addEventListener('click', function() {
  window.open('https://drive.google.com/drive/folders/1DwbhA4_ky0okoMFEdRE7ibMOLXIh1wsc?usp=sharing');
});

document.getElementById('tw_link').addEventListener('click', function() {
  window.open('https://twitter.com/LogoliveryAI');
});

document.getElementById('in_link').addEventListener('click', function() {
  window.open('https://www.linkedin.com/company/logoliveryai');
});

