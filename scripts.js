a// scripts.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Reset error message
    errorMessage.textContent = '';

    // Simple validation (could be expanded for more complex validation)
    if (!username || !password) {
        errorMessage.textContent = 'Please enter both username and password.';
        return;
    }
    
    // Placeholder for server authentication logic
    if (username === 'user' && password === 'pass') {
        //alert('Login successful!');
        // Redirect to another page or perform further actions
        // Redirect to a new page on successful login
        window.location.href = 'acreen2.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
