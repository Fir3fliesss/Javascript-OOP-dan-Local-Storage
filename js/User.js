//Untuk logic bisnis
//Untuk mengelola data seperti CRUD

class User {

    constructor(){
        this.users = this.getUsers() || [];
    }

    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('Users', JSON.stringify(this.users));

        return {
            success: true,
        }

    }

    sigInUsers(usernameByInput){

        //proses pemeriksaan data username pada local storage
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if(userExists){
         //proses pengembalian data kepada sigin.js controller
            return{
                success: true,
                username,
            }
        }
        else{
            return{
                success: false,
                message: 'Data tidak ditemukan',
            }
        }

        //proses pengembalian data kepada sigin.js controller
        return{
            success: true,
            username,
        }
    }

    getUsers(){
        return JSON.parse(localStorage.getItem('Users')) || [];
    }

}