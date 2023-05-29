import {createContext} from "react"
import { useNavigate } from "react-router-dom"
import { IContextProps, IDataLogin, IDataRegister, IDataRegisterContat, ITypeUserContext } from "../hooks/interfaces"
import { api } from "../api/api"

const UserContext = createContext({} as ITypeUserContext)

function UserProvider ({children}: IContextProps){
    const navegate = useNavigate()

    async function onSubmitLogin (data: IDataLogin) {

        try {

            const request = await api.post("/login", data) 

            if(request.status === 200){

                localStorage.setItem("token", request.data.token)
                api.defaults.headers.common["Authorization"] = request.data.acessToken
                navegate("/dashboard") 
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }

    async function autoLogin() {
        const token = localStorage.getItem("token");
    
        if (!token) {
          return null;
        }
    }

    async function onSubmitRegister (data: IDataRegister){

        try {
            
            const request = await api.post("/users", data) 

            if(request.status === 201){
                navegate("/") 
            }

        } catch (error) {
            console.log(error)
        }

    }

    async function registerContat (data: IDataRegisterContat){
        const token = localStorage.getItem("token")

        try {
            
            const request = await api.post("/contact", data, {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            })

            if(request.status === 201){
                prompt("Contato cadastrado com sucesso!") 
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <UserContext.Provider value={{onSubmitLogin, onSubmitRegister, autoLogin, registerContat}} >
            { children }
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}