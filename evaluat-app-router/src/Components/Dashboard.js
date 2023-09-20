import React from "react";
import { useNavigate , Link} from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Dashboard = () => {

    const {setAuth}=useContext(AuthContext);
    const navigate=useNavigate();

    const logout=async()=>{
        setAuth({});
        navigate('/linkage');
    }

    return(
        <section>
            <h1>Dashboard</h1>
            <br/>
            <p>You are logged in !</p>
            <br/>
            <Link to="/editor">Go to the Editor page</Link>
            <br/>
            <Link to="/admin">Go to the Admin page</Link>
            <br/>
            <Link to="/teamLeader">Go to the Team Leader page</Link>
            <br/>
            <Link to="/teamMember">Go to the Team Member page</Link>
            <br/>
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>

    )
}

export default Dashboard