document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Login Successful');
      // Redirect or handle successful login logic here
    } else {
      alert('Please enter both username and password');
    }
  });
  
  // Handle Social Login - Dummy Functionality
  document.querySelector('.facebook-btn').addEventListener('click', function() {
    alert('Logged in with Facebook');
    // You can replace this with actual Facebook login functionality
  });
  
  document.querySelector('.google-btn').addEventListener('click', function() {
    alert('Logged in with Google');
    // You can replace this with actual Google login functionality
  });
  