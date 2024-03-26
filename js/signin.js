//Controller -> pernghubung antara UI dan model User

document.addEventListener('DOMContentLoaded', () => {

    const userformm = document.getElementById('userForm');
    const userManager = new User();

    userformm.addEventListener('submit', (e) => {

        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        const result = userManager.saveUser(usernameByInput);

        if(result.success){
            alert('success login')
            // return window.location.href = '../signin.html';
        }
        else {
            console.log(result.message);
        }

    })

} )