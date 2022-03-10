
import { Link } from "react-router-dom"

const GuideItem = ({ guide }) => {
    return (
        <Link to={`/guide/${guide}`}>
            <div className="guide-card">
                <div>{guide}</div>
            </div>
        </Link>
    )
}
export default GuideItem