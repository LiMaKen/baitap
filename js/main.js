const apiUser = 'http://localhost:3000/user';
function start (){
  var onlickLogin = document.querySelector('.onclick2') 
  var onclickRegister = document.querySelector('.onclick2') 
  onlickLogin.onclick= () => login(event)

  onclickRegister.onclick = () => register(event)

}
start()

function login(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  fetch(apiUser)
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.username === username && user.password === password);
     console.log(users)

      if (user) {
        alert('Đăng nhập thành công!');
        
      } else {
        alert('Sai ten dang nhập hoặc tài khoản');
      }
    })
    .catch(error => console.log('Lỗi:', error));
}

function register(event) {
  event.preventDefault();

  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  const newUser = {
    username: username,
    password: password
  };

  fetch(apiUser, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(data => {
      alert('Đăng ký thành công!');
      // Thực hiện các hành động khác sau khi đăng ký thành công
    })
    .catch(error => console.log('Lỗi đăng ký:', error));
}