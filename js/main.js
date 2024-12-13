const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "WebProject/home.html"; // Đường dẫn chính xác từ thư mục gốc
});

const sendResetMailButton = document.getElementById("sendmail");
sendResetMailButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "WebProject/sendmail.html"; // Đường dẫn chính xác
});

const returnLogin = document.getElementById("returnlogin");
returnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "WebProject/login.html"; // Đường dẫn chính xác
});

const success = document.getElementById("success");
success.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "WebProject/home.html"; // Đường dẫn chính xác
});

const register = document.getElementById("register");
register.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "WebProject/register.html"; // Đường dẫn chính xác
});
