import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

const LoginPage = () => {
  const navigate = useNavigate();
  const {authState, login} = useContext(AuthContext);

  const onLogin = () => {
    login('FIFO')
    if (authState.logged) {
      navigate('/', {
        replace: true
      });
    }
  }
  return (
    <>
     <div className="container mt-5">
        <h1>LoginPage</h1> 
        <hr />
        <button className="btn btn-primary" onClick={onLogin}> Login </button>
     </div>
     
    </>
  )
}

export {
    LoginPage
}
