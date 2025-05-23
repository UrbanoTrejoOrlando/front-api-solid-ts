import {useState} from "react";
const Form = ()=>{
    const [isRegister, setRegister] = useState(true);

    return(
        <form>
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
                <span>{isRegister?"Inicia Sesion aqui":"Registrate aqui"}</span></p>
        </form>
    )
}
export default Form;