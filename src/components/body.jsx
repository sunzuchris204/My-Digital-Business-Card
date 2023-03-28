import React from 'react'

export default function Body() {
    return (
        <div className='main--body'>
            <h3 className='about'>About</h3>
            <p>
                I am a FullStack developer
                with a particular interest
                in making things simple
                and automating daily tasks.
                I try to keep up with security
                and best practices, and am always
                looking for new things to learn.
            </p>
            <h3 className='about'>Interests</h3>
            <p className='last'>
             Eager to develop software solutions
             that solve real-world problems, 
             I'm constantly learning new technologies 
             such as web3.0 and honing my software 
             development skills. Driven by a passion 
             for innovation and collaboration, I strive 
             to create products that make a difference 
             in people's lives.
            </p>

            <img src="./src/assets/sunzu.jpg" className='clip-full'/>

            <h3 className='about'>Professionalism!</h3>
            <p className='last'>
            UI/UX Design <br />
            FullStack Web\ WebApp Development <br />
            React JS\ HTML\ CSS\ NODE JS\ React Native
            </p>

            <h3 className='about'>Favourite Qoute!</h3>
            <p className='last'>
            What you get by achieving your goals
            Is not as important as
            What you become by achieving your goals.
            </p>
        </div>
    )
}

