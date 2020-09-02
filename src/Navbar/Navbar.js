import React, { Component } from 'react'
import './Navbar.scss'
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, SkipToContent } from 'carbon-components-react/lib/components/UIShell'

class Navbar extends Component {

    state = {

    }
    render(){
        return(
            <Header aria-label="Matracometro">
                 <SkipToContent />
                <HeaderName href="#" prefix="ZAP ZAP">
                    Matracometro
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                    <HeaderMenuItem href="/"> Medir </HeaderMenuItem>
                    {/* <HeaderMenuItem href="/about">Sobre</HeaderMenuItem> */}
                </HeaderNavigation>
            </Header>
        )
    }

}

export default Navbar