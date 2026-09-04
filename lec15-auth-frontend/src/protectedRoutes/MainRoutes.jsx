
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from "react-router"
const MainRoutes = () => {
  
const {user,isLoading} = useSelector((store)=> store.auth)

if(isLoading){
    return <div>Loading...</div>
}

if(!user){
    return <Navigate to="/"/>;
}

return <Outlet/>;
};

export default MainRoutes
