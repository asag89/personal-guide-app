
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const GuideContext = createContext()

const GuideProvider = ({ children }) => {

    const url = process.env.REACT_APP_API_URL
    const [guides, setGuides] = useState([])
    const [notes, setNotes] = useState([])
    const [searched, setSearched] = useState("")
    const [ref, setRef] = useState("")

    const getGuides = async () => {
        const response = await axios(`${url}/guides`)
        setGuides(response.data)
    }

    // to be done later
    // const addGuide =  (newGuide) => {
    // }

    const getNotes = async (guide) => {
        const response = await axios(`${url}/${guide}`)
        setNotes(response.data)
    }

    const addNote = async (guide, newNote) => {
        const response = await axios.post(`${url}/${guide}`, newNote)
        setNotes([...notes, response.data])
    }

    const deleteNote = async (id, guide) => {
        await axios.delete(`${url}/${guide}/${id}`)
        setNotes(notes.filter(item => item.id !== id))
    }

    useEffect(() => {
        getGuides()
        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, [])

    return (
        <GuideContext.Provider value={{ guides, notes, getNotes, addNote, deleteNote, searched, setSearched, ref, setRef }}>
            {children}
        </GuideContext.Provider>
    )
}
export default GuideProvider