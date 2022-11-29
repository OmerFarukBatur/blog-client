import axios from "axios";


export const userLogin = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Auth/Login`,input);     
    return response;    
}


export const userRegister = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Users/CreateUser`,input);     
    return response;    
}

export const addPost = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Posts/CreatePost`,input);     
    return response;    
}