import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from 'Components/loading/Loading'

import './App.scss'
// import Loading from './components/loading/Loading'

// interface Loading {
//     isLoading: boolean
// }

const App = () => {
    const [ isLoading, setIsloading ] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 2000)
    }, [])
    return (
        <BrowserRouter>
            <div className="App">
                {!isLoading 
                ? (
                    <>
                        <div>

                            testtest
                        </div>
                        {/* <Switch>
                            <Route path="" component={} />

                        </Switch> */}
                    </>
                ) 
                : (
                    // <div />
                    <Loading />
                )}
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
