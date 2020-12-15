import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Test {
    a: number,
    b: string,
}

const App = () => (
    <div>
        <h1>Hello</h1>
        <p>test</p> 
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
