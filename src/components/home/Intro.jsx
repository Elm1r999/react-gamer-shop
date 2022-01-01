import React, {useState} from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Button} from '../Button'

const IntroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    min-height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

const IntroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

const IntroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IntroHeader = styled.h1`
    color: #fff;
    font-size: 4vw;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const IntroSubHeader = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const IntroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`   

const Intro = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <IntroContainer>
            <IntroBackground>
                <VideoBackground autoPlay loop muted src="/videos/gaming-video.mp4" type='video/mp4'>Your browser does not support the video tag.</VideoBackground>
            </IntroBackground>
        <IntroContent>
            <IntroHeader>Want to play like your favorite e-sports player?</IntroHeader>
            <IntroSubHeader>We offer the best gaming sets <br></br> trusted and used by the pros</IntroSubHeader>
            <IntroBtnWrapper>
                <Button to="/store" 
                             onMouseEnter={onHover}
                             onMouseLeave={onHover}
                             primary="true"
                             dark="true"
                >
                Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </IntroBtnWrapper>
        </IntroContent>
        </IntroContainer>
    )
}

export default Intro
