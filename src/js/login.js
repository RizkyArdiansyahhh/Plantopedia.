document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameValid = ["abid", "ikhsan", "amalul"];
    const passwordValid = "12345678";
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let isLoginSuccessful = false;

    for (let user of usernameValid) {
      if (user === username.value && password.value === passwordValid) {
        isLoginSuccessful = true;
        break;
      }
    }

    if (isLoginSuccessful) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Anda berhasil login",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        sessionStorage.setItem("isLogin", true);
        window.location.href = "../index.html";
      });
    } else {
      Swal.fire({
        title: "Usename atau password salah",
        text: "Masukkan username : abid / ikhsan / amalul dan password : 12345678",
        icon: "error",
        confirmButtonText: "coba lagi",
      }).then(() => {
        username.value = "";
        password.value = "";
      });
    }
  });
});
