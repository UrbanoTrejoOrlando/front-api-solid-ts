import { API_URL_LOGIN } from "../common/env"

const login = async (email: String, password:String)=>{
    return await fetch (API_URL_LOGIN,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({email,password})
    })
}
export default login;