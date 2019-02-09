$(function(){
  $('#button').click(function(){
  var lastName = $('#lastname').val();
  var firstName = $('#firstname').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var regexName = /^[A-Za-z\à\â\ä\é\è\ê\ë\ï\î\ô\ö\ù\û\ü\ÿ\ç\À\Â\Ä\Ç\É\È\Ê\Ë\Î\Ï\Ô\Ö\Ù\Û\Ü\Ÿ -]+$/;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  var regexPhone = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/;


  if ((regexName.test(lastName) == true) && (regexName.test(firstName) == true) && (regexEmail.test(email) == true) && (regexPhone.test(phone) == true)){
    alert('tout est bon');
  } else {
    alert('Vous avez une erreur');
  }
});
});
