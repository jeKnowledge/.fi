import React from 'react'
import { Navbar } from '../../components'
import images from '../../constants'
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <div className="home-middle">
                <div className="home-logo">
                    <img src={images.logo} alt="" />
                </div>
                <div className="home-sub-heading">
                    literacia financeira simplificada
                </div>
            </div>
        </div>
    )
}

export default Home