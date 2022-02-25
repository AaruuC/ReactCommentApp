import { useState } from "react"

const Voter = () => {
    const [voteCount, setVote] = useState(0)
    return (
        <div>
            <div>
                <button class='button is-success' onClick={() => setVote(voteCount + 1)}>
                    upvote
                </button>
                <p id='right'>Upvotes: {voteCount}</p>
            
                <button class='button is-danger' onClick={() => setVote(voteCount - 1)}>
                    downvote
                </button>
            </div>
        </div>
    )
}

export default Voter