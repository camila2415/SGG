// 2 Casos de prueba reales exigidos
const defaultUsers = [
    { email: 'admin@gmail.com', password: '123456' },
    { email: 'user@yahoo.com', password: 'password' }
];

// Dominios de correo electronico validos aceptados
const allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.com.ar', 'outlook.com', 'hotmail.com', 'icloud.com', 'live.com'];

// Validar estructura del mail y su dominio
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return false;

    const domain = email.split('@')[1].toLowerCase();
    return allowedDomains.includes(domain);
}

// Muestra u oculta el error visual mientras se escribe
function validateEmailField() {
    const input = document.getElementById('login-email');
    const errorDiv = document.getElementById('login-email-error');
    
    if (input.value === "" || isValidEmail(input.value.trim())) {
        input.classList.remove('invalid');
        errorDiv.style.display = 'none';
        return true;
    } else {
        input.classList.add('invalid');
        errorDiv.style.display = 'block';
        return false;
    }
}

// Validacion y paso a la pantalla de exito
function handleLogin(event) {
    event.preventDefault();
    if (!validateEmailField()) return;

    const emailInput = document.getElementById('login-email').value.trim();
    const passwordInput = document.getElementById('login-password').value;

    // Comprobacion con los dos casos de prueba
    const userFound = defaultUsers.find(u => u.email.toLowerCase() === emailInput.toLowerCase() && u.password === passwordInput);

    if (userFound) {
        document.getElementById('screen-login').classList.remove('active');
        document.getElementById('screen-success').classList.add('active');
    } else {
        alert('Credenciales incorrectas. Revisa los datos de prueba provistos.');
    }
}

// Funcion del boton Cerrar Sesion (Vuelve a la pantalla de inicio)
function logout() {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('screen-success').classList.remove('active');
    document.getElementById('screen-login').classList.add('active');
}

// Switch de Modo Claro / Oscuro directo en el body
function toggleTheme() {
    const btn = document.getElementById('theme-btn');
    const isDark = document.body.hasAttribute('data-theme');
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        btn.textContent = 'Modo Oscuro'; 
    } else {
        document.body.setAttribute('data-theme', 'dark');
        btn.textContent = 'Modo Claro'; 
    }
}