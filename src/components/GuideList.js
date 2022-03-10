
import { useContext } from "react"
import { GuideContext } from "../context/GuideContext"
import GuideItem from "./GuideItem"

const GuideList = () => {
    const { guides } = useContext(GuideContext)

    return (
        <div className="guide-list">
            {guides.map((item, i) => (
                <GuideItem key={i} guide={item} />
            ))}
        </div>
    )
}
export default GuideList