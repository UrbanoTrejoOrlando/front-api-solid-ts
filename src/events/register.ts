import { API_URL_REGISTER } from "../common/env"

const register = async (email: String, password:String)=>{
    return await fetch (API_URL_REGISTER,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({email,password})
    })
}
export default register;