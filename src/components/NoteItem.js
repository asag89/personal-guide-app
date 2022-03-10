
import { useContext } from "react"
import { MdDelete } from "react-icons/md"
import { GuideContext } from "../context/GuideContext"

const NoteItem = ({ note, guide }) => {

    const { deleteNote } = useContext(GuideContext)
    return (
        <div className="note-card">
            <div className="note-card-info">
                <div className="note-card-title">{note.title}</div>
                <div>{note.text}</div>
            </div>
            <MdDelete onClick={() => deleteNote(note.id, guide)} title="delete" className="note-card-delete-icon" />
        </div>
    )
}
export default NoteItem