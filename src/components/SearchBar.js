
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { GuideContext } from "../context/GuideContext"

const SearchBar = () => {

    const [text, setText] = useState("")
    const { setSearched} = useContext(GuideContext)

    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams()

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            setSearched(text)
            setSearchParams({q: text})
        }
        if(text === ""){
            setSearchParams({})
        }
    }

    useEffect(() => {
        setSearchParams({})
        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, [])

    return(
        <div>
            <input className="search-input" type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleKeyPress} placeholder="Search" />
        </div>
    )
}
export default SearchBar