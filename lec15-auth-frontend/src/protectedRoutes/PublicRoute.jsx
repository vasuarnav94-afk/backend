
import { useSelector } from 'react-redux'
import { Navigate , Outlet} from 'react-router'

const PublicRoute = () => {
  const {user, isLoading} = useSelector((store)=> store.auth);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(user){
    return <Navigate to="/main"/>;
  }

  return <Outlet />
}

export default PublicRoute