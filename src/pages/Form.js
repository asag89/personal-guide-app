

import Header from "../components/Header"
import { useContext, useState } from "react"
import { GuideContext } from "../context/GuideContext"
import { useNavigate, Link } from "react-router-dom"
import Button from "../components/Button"
const Form = () => {

    const { addNote, ref } = useContext(GuideContext)

    const navigate = useNavigate()


    const [newNote, setNewNote] = useState({
        title: "",
        text: ""
    })
    const { title, text } = newNote

    const onInputChange = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title !== "" && text !== "") {
            addNote(ref, newNote)
            navigate(`/guide/${ref}`)
        }
    }
    return (
        <div>
            <Header title="What did you learn" />
            <form className="form" onSubmit={handleSubmit}>
                <h3>Add Note</h3>
                <input type="text" placeholder="Title" name="title" value={title} onChange={onInputChange} />
                <textarea cols="30" rows="4" placeholder="Text" name="text" value={text} onChange={onInputChange} />
                <Button text="Create" />
                <Link to="/" className="animated-btn">Homepage</Link>
            </form>
        </div>
    )
}
export default Form