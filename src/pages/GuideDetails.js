
import { useContext, useEffect } from "react"
import { GuideContext } from "../context/GuideContext"
import { useParams, Link } from "react-router-dom"

import { RiAddCircleFill } from "react-icons/ri"
import { GrReturn } from "react-icons/gr"

import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import NoteItem from "../components/NoteItem"

const GuideDetails = () => {

    const { getNotes, notes, searched, setRef } = useContext(GuideContext)
    const { guide } = useParams()

    const keys = ["title", "text"]
    useEffect(() => {
        getNotes(guide)
        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, [])

    const count = notes.filter((item) => {
        if (searched === "") {
            return item
        }
        if (searched !== "") {   // multiple search (title, text)
            return keys.some((key) => item[key].toLowerCase().includes(searched))
        }
        return item
    })
    return (
        <>
            <Header title={guide.toUpperCase()} />
            <SearchBar />
            <div className="guide-details">
                <div className="notes-number">{count.length}</div>
                <div className="notes-link">
                    <Link className="notes-add" to={"/add-note"} title="add"><RiAddCircleFill className="notes-add-icon" onClick={() => setRef(guide)} /></Link>
                    <Link to="/" className="notes-homepage" title="homepage"><GrReturn className="notes-homepage-icon" /></Link>
                </div>
            </div>
            <div className="container-notes">
                {notes.length === 0 ? (<h3 className="empty-noteList">You have no notes <Link to="/add-note">Create a new one</Link></h3>) : count.length === 0 ? (<h3 className="empty-noteList">No notes matching your search were found</h3>) :
                    count.map((item) => (
                        <NoteItem key={item.id} note={item} guide={guide} />
                    ))}
            </div>
        </>
    )
}
export default GuideDetails