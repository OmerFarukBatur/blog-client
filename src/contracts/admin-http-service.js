import axios from "axios";


export const userLogin = async function(email,password) {
    const state = "";
    await axios.postForm(`${process.env.REACT_APP_API_URL}/api/user/login`,{ email, password})
        .then((value) =>{
            console.log(value.status);
            this.state = "success";
        })
        .catch();
    if(this.state !== "success")
        this.state = "error";
    console.log(this.state);    
    return this.state;    
}