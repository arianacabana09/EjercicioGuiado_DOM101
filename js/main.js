function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];
  var data = document.getElementById("form-data");

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correro Electrónico";
  password.placeholder = "Constraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesion";
  data.innerHTML = "Datos de Formulario";
}
//translate();
function mostrar(){
  var correo=document.getElementById("inputEmail");
  var pass=document.getElementById("inputPassword");

var dato = "<B>El correo electrónico ingresado es:</B><br>"+inputEmail.value+"<br>"+
"<B>La clave ingresada es:</B><br>"+inputPassword.value+"<br>";
document.getElementById("datos").innerHTML= dato;
}
