import React, { Component } from 'react';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import { Desktop, Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'

import Home from '../Home'
import Background from './Background'
import NavButton from './NavButton';
import Register from './Register';
import ClickChange from './ClickChange';
import ChangeSize from './ChangeSize'




const Div = styled.div`
    transform :  translateY(-40%);
`

const DivBlur = styled.div`
    filter :  blur(${props => props.blur ? props.blur : 0}px);
`

const SideBarSection = styled.div`
    transform :  translateY(65%);
    
    @media screen and (max-width:1199px) {
        transform :  translateY(70%);
    }
    @media screen and (max-width:1024px) {
      transform: translate(0%,65%);
    }
    @media screen and (max-height:900px) {
        transform: translate(0%,40%);
    }
    @media screen and (max-width:750px) {
        left: -5vw;
        top: 7vh;
    }
    @media screen and (mmax-width:900px) {
        top: 5vh;
    }
`

const Content = styled.div`
    @media screen and (max-width:1199px) {
        left: -20vw;
        top: 10vh;
    }
    @media screen and (max-width:960px) {
        left: -25vw;
        top: 10vh;
    }
    @media screen and (max-width:800px) {
        left: -30vw;
        top: 15vh;
    }
`

const RegiserButton = styled.div`
    transform:translate(-20%,20%);
    @media screen and (max-width:1199px) {
        left: 80vw;
        top: -20vw;
    }
    @media screen and (max-width:1024px) {
        left: 80vw;
        top: -40vw;
    }
    @media screen and (max-width:800px) {
        left: 80vw;
        top: -30vw;
    }
`

const Logo = styled.img`
    width: 693.28px;
    height: 262px;
    top: 19px;
    z-index: 100;
    @media screen and (max-width:800px) {
        width: 610px;
        height: 220px; 
    }
`

const HomeDiv = styled.div`
    position:absolute;
    z-index:100;
    transform:translateY(5%);
    display : ${props => props.homedisplay ? props.homedisplay : 'block'};
    @media screen and (max-width:320px) {
        transform:translateY(0%);
    }
`

const LogoDiv = styled.div`
    @media screen and (max-width:1024px) {
        transform:translateY(30%);
    }
`

export default class NavBar extends Component {
        
    state = {
        id: 0,
        blur: 0,
        displayham:'none',
        homedisplay: 'block',
        mobiledisplay: 'none',
        slide:0
    }

    changeClick = (i) => {
        this.setState({
            id: i
        })
    }

    clickHome = (i) => {
        this.setState({
            id: i,
            mobiledisplay: 'block',
            homedisplay: 'none',
            displayham: 'block',
            displaymenu:-220
        })
    }
    ChangeBlur = () => {
        if(this.state.blur===2){
            this.setState({
                blur: 0
            })
        }else{
            this.setState({
                blur: 2
            })
        }
    }

    Clicklistham = () => {
        // window.location.reload(false);
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <div className="container-fluid p-0">
                    <Desktop>
                        <Background />
                        <LogoDiv className="d-flex justify-content-center">
                            <Logo src="/images/Objects/Logo.png" />
                        </LogoDiv>
                        <Div className="row justify-content-between">
                            <SideBarSection className="col-2 d-inline-flex flex-column ml-5 justify-content-start">
                                <NavButton changeClick={this.changeClick} />
                            </SideBarSection>
                            <Content className="col-7 d-inline-flex justify-content-center">
                                <ClickChange keyid={this.state.id} />
                            </Content>
                            <RegiserButton className="col-3 col-xl-2 d-inline-flex justify-content-end">
                                <Register />
                            </RegiserButton>
                        </Div>
                    </Desktop>
                    <Mobile>
                        <div className="row justify-content-end">
                            <HamburgerDiv displayham={this.state.displayham} slide={this.state.displaymenu}>
                                <input type="checkbox" onClick={this.ChangeBlur} />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul className="p-4">
                                    <li onClick={this.Clicklistham}>
                                        <NavButton changeClick={this.changeClick} />
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-center mt-3">
                                            <Register />
                                        </div>
                                    </li>
                                </ul>
                            </HamburgerDiv>
                        </div>
                        <DivBlur blur={this.state.blur}>
                            <Background />
                            <HomeDiv homedisplay={this.state.homedisplay} >
                                <Home clickHome={this.clickHome} />
                            </HomeDiv>
                            <ClickChange keyid={this.state.id} mobiledisplay={this.state.mobiledisplay}  />
                        </DivBlur>
                    </Mobile>
                </div>
            </React.Fragment>

        )   
    }   
}
