const users = [
    { id: 'user123', password: 'password123' },
    { id: 'testuser', password: 'test123' },
    { id: 'john_doe', password: 'john123' }
  ];
  
  function login() {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
  
    const user = users.find(user => user.id === id);
  
    if (!user) {
      showMessage("ID not exist from the DB");
    } else if (user.password !== password) {
      showMessage("Password Failed");
    } else {
      showMessage("Login Successful!");
    }
  }
  
  function showMessage(message) {
    document.getElementById('message').innerText = message;
  }
  