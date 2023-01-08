
import useAuth from '../hook/useAuth'
import {Outlet,Navigate} from 'react-router-dom'

const PrivateOutlet = () => {
    const auth = useAuth()
  return auth ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateOutlet