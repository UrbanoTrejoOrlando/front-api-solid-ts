import {useState} from "react";
import register from "../events/register";
import login from "../events/login";
import toast from "react-hot-toast/headless";

const Form = ()=>{
    const [isRegister, setisRegister] = useState(true);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const atraparFormulario = async (e:any)=>{
        e.preventDefault();
       try {
        let response = isRegister? await register(email,password): await login(email,password);
        const data = await response.json();
        const token = data.token;
        toast.success("Inicio exitoso");
       } catch (error:any) {
            toast.error(error.message || "Error al acceder al sistema");
       }
            
}

    return(
        <form onSubmit={atraparFormulario}>
            <h1>{isRegister?"Registrar Usuario":"Iniciar Sesion"}</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required 
                placeholder="user@example.com"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div>
                <button type="submit">
                    {isRegister?"Registrar":"iniciar Sesion"}
                </button>
            </div>
            <p>{isRegister?"Ya":"Aun no "}
                <span
                onClick={()=>setisRegister(!isRegister)}
                >{isRegister?"Inicia Sesion aqui":"Registrate aqui"}</span></p>
        </form>
    )
}
export default Form;