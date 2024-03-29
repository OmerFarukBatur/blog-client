import axios from "axios";


export const userLogin = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Auth/login`,input);     
    return response;    
}


export const userRegister = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Users/create-user`,input);     
    return response;    
}

export const createPost = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Posts/create-post`,input);     
    return response;    
}

export const createCategory = async function(input) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Categories/create-category`,input);     
    return response;    
}

export const getAllCategory = async function() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Categories/get-all-category`);     
    return response;    
}

export const getAllPost = async function() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Posts/get-all-post`);     
    return response;    
}

export const uploadImages = async function() {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Posts/upload-post-image`);     
    return response;    
}

export const uploadOtherFiles = async function() {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Posts/upload-post-image`);     
    return response;    
}
