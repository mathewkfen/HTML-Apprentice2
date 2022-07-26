let user = document.getElementById('username')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (user.value === '' || user.value == null) {
        messages.push('Username is required')
    }

    if(password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if(password.value.length >= 20) {
        messages.push('Password must be shorter than 20 characters')
    }

    if(password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})