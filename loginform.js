const userName = document.getElementById('userName');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (userName.value === '' || userName.value == null) {
        messages.push('User name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters.')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters.')
    }

    if (password.value.length === 'password') {
        messages.push('Your password cannot be password. It must be Python.')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})