
import Header from "../components/Header"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (<>
        <Header title="Page Not Found, Something Went Wrong" />
        <Link className="animated-btn" to="/">Homepage</Link>
    </>
    )
}
export default NotFound