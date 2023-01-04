function sign_up() {
   let email = document.getElementsByName('email')[0].value;
   let password = document.getElementsByName('pass')[0].value;
   let retype_password = document.getElementsByName('retype_pass')[0].value;

   if(email == '' && password == '' && retype_password == '') {
      alert('Inputs are Empty');
      return false;

   } else if(email == '' && password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(email == '' && retype_password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(password == '' && retype_password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(email == '') {
      alert('Enter your Email');
      return false;

   } else if(password == '') {
      alert('Enter your Password');
      return false;

   } else if(retype_password == '') {
      alert('Retype your Password');
      return false;

   } else if(password !== retype_password) {
      alert('Password not Matched');
      return false;

   } else if(password.length < 8) {
      alert('Password Atleast 8 Digits');
      return false;
  }
}
function sign_in() {
   let email = document.getElementsByName('email')[0].value;
   let password = document.getElementsByName('pass')[0].value;

   if(email == '' && password == '') {
      alert('Enter your Username and Password');
      return false;

   } else if(email == '') {
      alert('Enter your Email');
      return false;

   } else if(password == '') {
      alert('Enter your Password');
      return false;
   }
}
function change_password() {
   let email = document.querySelector('.email').value;
   let password = document.querySelector('.pass').value;
   let new_password = document.querySelector('.change-pass').value;

   if(email == '' && password == '' && new_password == '') {
      alert('Inputs are Empty');
      return false;

   } else if(email == '' && password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(email == '' && new_password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(password == '' && new_password == '') {
      alert('Two Inputs are Empty');
      return false;

   } else if(email == '') {
      alert('Enter your Email');
      return false;

   } else if(password == '') {
      alert('Enter your Password');
      return false;

   } else if(new_password == '') {
      alert('Enter your New Password');
      return false;

   } else if(new_password.length < 8) {
      alert('Password Atleast 8 Digits');
      return false;
   }
}
function delete_account() {
   let delete_email = document.getElementsByName('delete-email')[0].value;
   let delete_password = document.getElementsByName('delete-password')[0].value;

   if(delete_email == '' && delete_password == '') {
      alert('Enter your Username and Password');
      return false;

   } else if(delete_email == '') {
      alert('Enter your Email');
      return false;
      
   } else if(delete_password == '') {
      alert('Enter your Password');
      return false;
   }
}