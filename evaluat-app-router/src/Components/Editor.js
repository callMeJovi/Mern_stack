import {Link} from "react-router-dom"

const Editor=()=>{
    return(
        <section>
            <h1>Editors Page</h1>
            <br />
            <p>Hello, Editor !</p>
            <div>
                <Link to="/">Dashboard</Link>
            </div>
        </section>
    )
}

export default Editor