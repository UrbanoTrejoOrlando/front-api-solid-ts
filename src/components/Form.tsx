import {useState} from "react";
import register from "../events/register";
import login from "../events/login";
import toast from "react-hot-toast";
const Form = ()=>{
    const [isRegister, setIsRegister] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const atraparFormulario = async (e:any)=>{
        e.preventDefault();
        try{
        let response = isRegister? await register(email,password):await login(email,password);
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token",token);
        toast.success("Ingresò al sistema corectamente");
        }catch(error:any){
            toast.error(error.message || "Error al ingresar al sistema ");
        }
    }

    return(
        <form onSubmit={atraparFormulario}>
            <h1>{isRegister?"Registrar Usuario":"Iniciar Sesion"}</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required 
                placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <button type="submit">
                    {isRegister?"Registrar":"iniciar Sesion"}
                </button>
            </div>
            <p>{isRegister?"Ya tienes una cuenta. ":"Aun no tienes cuenta. "}
                <span 
                onClick={()=>setIsRegister(!isRegister)}
                    >{isRegister?" Inicia Sesion aqui":"Registrate aqui"}</span></p>
        </form>
    )
}
export default Form;
