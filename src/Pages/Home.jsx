import {  useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = () => {
   const [access, setAccess] = useState(true)
   const [text, setText] = useState("")
   const [password, setPassword] = useState("")
   const login = useSelector((state)=>state.home.login)
  
   const checkAccess = () => { if (text === login && password === "123") setAccess(false);
   else {setAccess(true); alert("Вы ввели неправильный пароль или логин")}
 }

   return (
      <div >
         <h3>Главная страница</h3>
         <form>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите логин" />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" />
            <br />
            <button type="button" onClick={checkAccess}>Отправить</button>
         </form>
         <Link to="/profile">
            <button disabled={access}>Профиль</button>
         </Link>
      </div>
   )
}
export default Home