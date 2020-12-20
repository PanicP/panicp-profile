
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'

import Chat from 'Components/pages/Chat'
import Hobby from 'Components/pages/Hobby'
import Loading from 'Components/pages/Loading'
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
                            <Route path="/chat" component={Chat} />
                            <Route path="/hobby" component={Hobby} />
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
                    <Loading />
                )}
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
