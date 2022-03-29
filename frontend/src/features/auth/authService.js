import axios from 'axios';
// const API_URL = '/api/users';
const API_URL = '/api/users/'

//Register the user (func)

const register = async(userData) => {
    const response = await axios.post(API_URL , userData);

    if(response.data) {
        //store it in the local storage
localStorage.setItem('user' , JSON.stringify(response.data))
    }
    return (response.data);
}

//Login the user

const login = async(userData) => {
    const response = await axios.post(API_URL + 'login', userData)
if(response.data) {
    localStorage.setItem('user' , JSON.stringify(response.data));
}
return (response.data);

}


//Logout the user

const logout = () => {
    localStorage.removeItem('user');
}
const authService = {
    register,
    login,
    logout
}

export default authService;