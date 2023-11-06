import {Link} from 'react-router-dom'
const SideNavBar = () => {
    return (
        <>
            <div className="sideNavBar">
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/createCrewmate">createCrewmate</Link>
                    </li>
                    <li>
                    <Link to="/crewmateGallery">crewmate Gallery</Link>
                    </li>

                </ul>
            </nav>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" alt="" />
            </div>
        </>
    )
}
export default SideNavBar