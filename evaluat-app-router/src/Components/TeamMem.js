import {Link} from 'react-router-dom'

const TeamMem=()=>{
    return(
        <section>
            <h1>Team Member Page</h1>
            <br/>
            <p>Hello, Team Member !</p>
            <div className="flexGrow">
                <Link to="/">Dashboard</Link>
            </div>
        </section>
    )

}

export default TeamMem