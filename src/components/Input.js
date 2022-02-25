import { useState } from "react"

const Input = ({ setMessage }) => {

    const [u, setU] = useState('')
    const [c, setC] = useState('')

    return (
        <>
            <div className="column">

                <input class='input is-primary' type="text" id='clear' placeholder="Username" onChange={e => setU(e.target.value)}/>
                <textarea class='textarea' type="text" id='clear1' placeholder="Comment" onChange={e => setC(e.target.value)}/>
                <button class='button is-primary' onClick={() => {
                    if (u && c) {
                        const message = [u, c, 0]
                        setMessage(m => [...m, message])
                        document.getElementById('clear').value = ''
                        document.getElementById('clear1').value = ''
                    }
                }
            }>Comment</button>
            </div>
        </>
    )
}

export default Input