const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', function() {
  const length = prompt('How long do you want your password to be? (8-128 characters)');
  if (length === null) {
    return;
  }
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128.');
    return;
  }

  const useLowercase = confirm('Do you want to include lowercase letters?');
  const useUppercase = confirm('Do you want to include uppercase letters?');
  const useNumbers = confirm('Do you want to include numbers?');
  const useSymbols = confirm('Do you want to include symbols?');

  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert('Please select at least one character type.');
    return;
  }

  let allowedChars = '';
  if (useLowercase) allowedChars += 'abcdefghijklmnopqrstuvwxyz';
  if (useUppercase) allowedChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useNumbers) allowedChars += '0123456789';
  if (useSymbols) allowedChars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  
  paragraph.textContent = password;
});
