import { useState } from "react"
import Header from '../helpers/Header'

// const getPost = async() =>{
// }

// async function postGet(){
// }



const Usuarios = () => {

    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

  return (
    <section>
        <Header/>
        <form action="">
            <label htmlFor="">Nombre </label>
            <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" />
            <label htmlFor="">Password </label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />
            <label htmlFor="">Email </label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            
            <input type="button" />
        </form>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Contraseña</td>
                    <td>Correo</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nombre}</td>
                    <td>{password}</td>
                    <td>{email}</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default Usuarios