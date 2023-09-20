import {Link} from 'react-router-dom'

const Admin=()=>{
    return(
        <section>
            <h1>Admin Page</h1>
            <br/>
            <p>Hello, Administrator !</p>
            <div className="flexGrow">
                <Link to="/">Dashboard</Link>
            </div>
        </section>
    )

}

export default Admin