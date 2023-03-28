import React from 'react'
import Body from './body'
import Footer from './Footer'


export default function Nav() {
    return(
        <div className="Nav--container">
            <img className="clip-full" src="./src/assets/pexels.jpg"/>
            <h1>Sunzu Christian</h1>
            <h4>FullStack Developer</h4>
            <h4><a href="https://github.com/sunzuchris204" target="blank">GitHub</a></h4>
            <button><a href='https://sunzuchris250@gmil.com' target="blank">Email</a></button>
            <button className="but"><a>LinkedIn</a></button>
            <Body />
            <Footer />
        </div>
    )
}