import { useState } from "react"
import Input from "./Input"

const Reply = ({ depth }) => {

    const [message, setMessage] = useState('')

    if (depth >= 3) {
        return null
    }

    return (
        <>
        <div>
            <h1>Depth: {depth}</h1>
            <Reply depth={depth + 1} />
        </div>
        </>
    )
}

export default Reply