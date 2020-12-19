import React from 'react'
import './Loading.scss'

export default () => {
    return (
        <div className="test">
            <p>loading</p>
            <div className="line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}