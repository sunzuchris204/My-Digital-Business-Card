import React from 'react'
import Body from './body'
import Footer from './Footer'


export default function Nav() {
    return(
        <div className="Nav--container">
            <img className="clip-full" src="./src/assets/pexels.jpg"/>
            <h1>Sunzu Christian</h1>
            <h4>Frontend Developer </h4>
            <h4><a href="#">sunzuchris.com</a></h4>
            <button>Email</button>
            <button className="but">LinkedIn</button>
            <Body />
            <Footer />
        </div>
    )
}