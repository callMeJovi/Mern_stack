import {Link} from 'react-router-dom'


const TeamLeader=()=>{
    return(
        <section>
            <h1>Team Leader Page</h1>
            <br/>
            <p>Hello, Team Leader !</p>
            <div>
                <Link to="/">Dashboard</Link>
            </div>
        </section>

    )
}

export default TeamLeader
