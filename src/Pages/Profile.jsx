import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Profile = ()=>{
   const login = useSelector((state)=>state.home.login)
   return(
      <div>
         <h3>Ваш профиль</h3>
         <p>Ваш логин - {login}</p>
         <Link to="/">
            <button>На главную</button>
         </Link>
      </div>
   )
}
export default Profile