let siswa = []
fetch("user.json")
  .then(response => response.json())
  .then(data => {
    user = data;
  });

 user = user.length

function login() {

    let berhasil = false;

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < user.length; i++) {
    if (email == user[i].email && password == user[i].password) {
      document.getElementById("hasil").innerHTML =
        `Selamat datang  ${user[i].nama}, Login berhasil`;
        berhasil = true 
    break;
}
    if (!berhasil){
        document.getElementById("hasil").innerHTML = 
        `Login gagal, pastikan email dan password benar`;
    }
    console.log(email + password);
  }
}
