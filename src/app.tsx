
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'

import ChatPage from 'Components/pages/ChatPage'
import HobbyPage from 'Components/pages/HobbyPage'
import LoadingPage from 'Components/pages/LoadingPage'
import { history } from './history'

import './App.scss'

// interface Loading {
//     isLoading: boolean
// }

const App = () => {
    const [isLoading, setIsloading] = useState<boolean>(true)
    // const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 2000)
    }, [])

    return (
        <Router history={history}>
            {!isLoading
                ? (
                    <>
                        <Switch>
                            <Route path="/chat" component={ChatPage} />
                            <Route path="/hobby" component={HobbyPage} />
                            <Route path="/" component={() =>
                                <div>
                                    <button onClick={() => history.push('/chat')}>go to chat</button>
                                    <button onClick={() => history.push('/hobby')}>go to hobby</button>
                                </div>} />
                        </Switch>
                    </>
                )
                : (
                    // <div />
                    <LoadingPage />
                )}
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
