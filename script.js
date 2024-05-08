function validation() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;
  let subject = document.getElementById('subject').value;
  let error_message = document.getElementById('error_message');
  let text;

  error_message.style.padding = '10px';

  if (name.length < 6) {
    text = 'A valid name is required';
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 9) {
    text = 'A valid subject is required';
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = 'A valid phone number with area code is required';
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf('@') == -1 || email.length < 5) {
    text = 'A valid Stone Wall email is required';
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 100) {
    text = 'A valid message of 100 characters is required';
    error_message.innerHTML = text;
    return false;
  }

  alert('Data fields are valid. Thank you for your submission!');

  return false;
}
