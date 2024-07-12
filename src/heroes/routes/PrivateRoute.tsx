import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "../../auth"

const PrivateRoute = ({children}: {children: any}) => {
    const { logged } = useContext(AuthContext)
    return (logged) ? 
      (<>
        {children}
      </>) : 
    <Navigate to={'/login'} />
}

export default PrivateRoute
