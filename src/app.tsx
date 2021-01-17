
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import './App.scss'

import { history } from './history'
import ChatPage from 'Components/pages/ChatPage'
import HobbyPage from 'Components/pages/HobbyPage'
import LoadingPage from 'Components/pages/LoadingPage'
import ProjectPage from 'Components/pages/ProjectPage'
import OsuManiaPage from 'Components/pages/hobby/OsuManiaPage'
import WorkoutPage from 'Components/pages/hobby/WorkoutPage'

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
                            <Route path="/chat" exact  component={ChatPage} />
                            <Route path="/hobby" exact  component={HobbyPage} />
                            <Route path="/hobby/osumania" exact component={OsuManiaPage} />
                            <Route path="/hobby/workout" exact component={WorkoutPage} />
                            <Route path="/project" exact component={ProjectPage} />
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
