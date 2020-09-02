import React from 'react'
import { Link } from 'carbon-components-react'
import ReactLogo from './../assets/react-logo.png'
import Carbon from './../assets/carbon-logo.png'
import './About.scss'

const About = (props) =>{
    return(
        <div class="bx--grid">
            <div class="bx--row">
                <div class="bx--col">Desenvolvido por Vitor Baggi</div>
            </div>
            <div class="bx--row">
                <div class="bx--col">Visite meu <Link href="https://github.com/vibaggi">github</Link></div>
            </div>
            <div class="bx--row">
                <div class="bx--col"></div>
                <div class="bx--col">
                    <img src={ReactLogo}/>
                </div>
                <div class="bx--col">
                    <img src={Carbon}/> <div>IBM Carbon</div>
                </div>
                <div class="bx--col"></div>
            </div>
        </div>
    )
}

export default About