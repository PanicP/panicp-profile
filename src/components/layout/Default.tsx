import React from 'react'
import './Default.scss'

interface DefaultLayout {
    children: React.ReactNode;
    // any other props that come into the component
}

const Default = ({ children, ...props }: DefaultLayout ) => (
    <>
        <div className="container">
            { children }
        </div>
    </>
)

export default Default