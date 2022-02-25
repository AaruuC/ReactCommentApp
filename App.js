import 'bulma/css/bulma.min.css'
import React, { useEffect, useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import Voter from './components/Voter'
import Reply from './components/Reply'

const App = () => {
    const [message, setMessage] = useState([])

    return (
        <>
            <section class='hero is-primary'>
                <div class='hero-body'>
                    <p class='title'>
                        <Title />
                    </p>
                </div>
            </section>

            <div class='columns'>
                <div className='column is-half is-offset-one-quarter'>
                    <Input setMessage={setMessage} /> 
                </div>
            </div>

            <div class = 'columns'>
                <div className='column is-half is-offset-one-quarter'>
                {message.map(e => 
                    <>
                    <nav className='level'>
                        <div class='level-left'>
                        <div class='card'>
                            <div class='card-content'>
                                <div className='content'>
                                    User: {e[0]}
                                </div>
                                <div className='content'>
                                    {e[1]}
                                </div>
                            </div>
                            </div>
                            <div class='level-right'>
                                <div class='card'>
                                    <div class='card-content'>
                                    <Voter />
                                    <button class='button is-primary' onClick={() => {<Reply depth={0} />}}>Reply</button>
                                    </div>
                                </div>
                        
                        </div>
                        </div>
                    </nav>
                    </>
                )}
                </div>
            </div>
            
        </>
    )
}

export default App