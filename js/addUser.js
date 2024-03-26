//Controller -> pernghubung antara UI dan model User

document.addEventListener('DOMContentLoaded', () => {

    const userformm = document.getElementById('userForm');
    const userManager = new User();

    userformm.addEventListener('submit', (e) => {

        e.preventDefault();

        const userData = {
            username: document.getElementById
        }

        const result = userManager.saveUser(userData);

        if(result.success){
            return window.location.href = '../signin.html';
        }
        else {
            console.log('proses simpan data gagal');
        }

    })

} )